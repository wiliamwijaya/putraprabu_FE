import "../css/detailproduct.css";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card, Container, Row, Col } from "react-bootstrap";
import { TextField, Typography } from "@mui/material";
import Navbar from "../component/navbar";
import Navbarlogin from "../component/navbarlogin";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ConfirmationModal from "../component/modal";

const token = localStorage.getItem("token");
const role = localStorage.getItem("role");
const url = process.env.REACT_APP_BASE_URL;

function Detailproduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [qty, setQty] = useState(1);
  const [showModal, setShowModal] = useState(false);

  const fetchData = () => {
    axios
      .get(`${url}/products/${id}`, {
        headers: { Authorization: token },
      })
      .then((res) => {
        setData(res?.data?.result);
      });
  };

  const makeOrder = () => {
    const payload = {
      product_id: data.id,
      amount: Number(qty),
      total: data.price * Number(qty),
      status: 1,
    };
    if (Number(qty) > data.stock) {
      toast.error("masukan sesuai stock yang tersedia", {
        position: "top-center",
        autoClose: 750,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      axios
        .post(`${url}/orders`, payload, {
          headers: { Authorization: token },
        })
        .then((res) => {
          toast.success("Barang Berhasil Di Order!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          navigate("/history");
        });
    }
  };

  const handleDelete = () => {
    axios
      .delete(`${url}/products/${data.id}`, {
        headers: { Authorization: token },
      })
      .then((res) => {
        toast.success("Produk berhasil dihapus", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        navigate("/listproduct");
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  function berhasil() {
    setShowModal(true);
  }

  return (
    <>
      {token ? <Navbarlogin /> : <Navbar />}
      <Container className={`mt-5`}>
        {data && (
          <Row>
            <Col className={`mb-4`}>
              <img
                className="d-block w-100 image"
                src={
                  data.img ??
                  "https://www.snapon.co.za/images/thumbs/default-image_550.png"
                }
                alt=""
              />
              <Card className={`p-2 card mt-4`}>
                <Card.Body>
                  <h5 className={`mb-4`}>Deskripsi</h5>
                  <Typography>{data.description}</Typography>
                </Card.Body>
              </Card>
            </Col>
            <Col xl="4" lg="4" md="5" sm="12" xs="12">
              <Card className={`p-2`} style={{ borderRadius: "12px" }}>
                <Card.Body>
                  <h5>{data.name}</h5>
                  <Card.Text
                    className={`m-0 text-secondary`}
                    style={{ fontSize: "14px" }}
                  >
                    {data.category}
                  </Card.Text>
                  <h6 className={`mt-3 mb-4`}>Rp. {data.price}</h6>
                  <h6 className={`mt-3 mb-4`}>Stock: {data.stock ?? 0} pcs</h6>
                  {!token ? (
                    <>
                      <a href="https://wa.link/ljh6j8">
                        <button className={`button`}>ambil di tempat</button>
                      </a>
                      <button
                        className={`button mt-3`}
                        onClick={() => navigate("/Login")}
                      >
                        Kirim
                      </button>
                    </>
                  ) : (
                    <>
                      {role === "2" && (
                        <TextField
                          label="Qty"
                          type="number"
                          sx={{ mb: 3 }}
                          value={qty}
                          onChange={(e) => setQty(e.target.value)}
                          size="small"
                          fullWidth
                          helperText={`Maksimal qty: ${data.stock ?? 0}`}
                        />
                      )}
                      {data.stock > 0 && role === "2" && (
                        <a href="https://wa.link/ljh6j8">
                          <button className={`button`}>ambil di tempat</button>
                        </a>
                      )}
                      {data.stock > 0 && role === "2" && (
                        <button
                          className={`button  mt-3`}
                          onClick={berhasil}
                          disabled={qty < 1}
                        >
                          kirim
                        </button>
                      )}
                      {role === "1" && (
                        <button
                          className={`button mt-3`}
                          style={{ background: "red", border: "none" }}
                          onClick={handleDelete}
                        >
                          Hapus
                        </button>
                      )}
                    </>
                  )}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        )}
        <ConfirmationModal
          show={showModal}
          onHide={() => setShowModal(false)}
          onConfirm={() => makeOrder()}
        />
      </Container>
    </>
  );
}

export default Detailproduct;
