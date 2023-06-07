import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Modal,
  Form,
  Card,
} from "react-bootstrap";

import Navbar from "../component/navbar";
import Navbarlogin from "../component/navbarlogin";
import "../css/order.css";
import axios from "axios";
import moment from "moment/moment";
import { ToastContainer, toast } from "react-toastify";

const url = process.env.REACT_APP_BASE_URL;
const token = localStorage.getItem("token");

export default function Order() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    axios
      .get(`${url}/orders`, {
        headers: { Authorization: token },
      })
      .then((res) => {
        setData(res?.data?.result);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const generateStatus = (value) => {
    if (value === 1) return "Waiting List";
    if (value === 2) return "On Process";
    if (value === 3) return "Complete";
  };

  const handleProcess = (id, status) => {
    axios
      .put(
        `${url}/orders/${id}`,
        { status },
        {
          headers: { Authorization: token },
        }
      )
      .then((res) => {
        toast.success("Update Success!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        fetchData();
      })
      .catch(() => {
        toast.error("Update Failed", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
  };

  return (
    <div>
      {token ? <Navbarlogin /> : <Navbar />}
      <Container className="py-5">
        {data?.map((row, i) => (
          <Card key={i} className="mb-3">
            <Row>
              <Col className="pt-2" style={{ width: "120px", height: "250px" }}>
                <img src={row?.product?.img} alt="" className="productImage" />
              </Col>
              <Col>
                <div className="d-flex justify-content-between">
                  <p
                    className="text-secondary mb-2"
                    style={{ fontSize: "14px" }}
                  >
                    {row?.user?.address ?? "-"}
                  </p>
                  <p
                    className="text-secondary mb-2 mx-3"
                    style={{ fontSize: "14px" }}
                  >
                    {moment(row?.createdAt).format("DD MMMM yyyy | hh:mm")}
                  </p>
                </div>
                <p>penerima: {row?.user?.username ?? "-"}</p>
                <p>No Order: {row?.id ?? "-"}</p>
                <h6 className="my-1">{row?.product?.name}</h6>
                <p className="my-1">Rp. {row?.total ?? 0}</p>
                <b className="my-1">{generateStatus(row?.status ?? 1)}</b>
                <Button
                  className="modal-button-action"
                  onClick={() => handleProcess(row?.id, row?.status + 1)}
                  disabled={row?.status === 3}
                >
                  {row?.status === 1 ? "Proses Pesanan" : "Selesaikan Pesanan"}
                </Button>
              </Col>
            </Row>
          </Card>
        ))}
      </Container>
    </div>
  );
}
