import * as React from "react";
import Table from "@mui/material/Table";
import { Button } from "react-bootstrap";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { Container } from "@mui/material";
import Navbar from "../component/navbar";
import Navbarlogin from "../component/navbarlogin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import "../css/history.css";
const token = localStorage.getItem("token");
const url = process.env.REACT_APP_BASE_URL;

export default function BasicTable() {
  const [data, setData] = React.useState([]);
  const [showModal, setShowModal] = useState(false);

  const fetchData = () => {
    axios
      .get(`${url}/orders/history`, {
        headers: { Authorization: token },
      })
      .then((res) => {
        setData(res?.data?.result);
      });
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  const generateStatus = (value) => {
    if (value === 1) return "Waiting List";
    if (value === 2) return "On Process";
    if (value === 3) return "Complete";
    if (value >= 4) return "Cancel";
  };

  const handleProcess = (id, status) => {
    axios
      .put(
        `${url}/orders/${id}/cancel`,
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
    <>
      {token ? <Navbarlogin /> : <Navbar />}
      <ToastContainer />
      <Container sx={{ pt: 5, pb: 5 }}>
        <h4>Silakan Melakukan Chat Ke Whatsapp Untuk Melakukan Pembayaran</h4>
        <a className="whatsup" href="https://wa.link/mv65zr">
          <FontAwesomeIcon icon={faWhatsapp} className="float" />
        </a>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <b>Product Name</b>
                </TableCell>
                <TableCell align="center">Order ID</TableCell>
                <TableCell align="center">Amount</TableCell>
                <TableCell align="center">Total</TableCell>
                <TableCell align="right">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((row) => (
                <TableRow
                  key={row?.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <b> {row?.product?.name ?? "Deleted Product"}</b>
                  </TableCell>
                  <TableCell align="center">{row?.id}</TableCell>
                  <TableCell align="center">x{row?.amount}</TableCell>
                  <TableCell align="center">Rp. {row?.total}</TableCell>
                  <TableCell align="center">
                    {generateStatus(row?.status)}
                  </TableCell>
                  <TableCell align="right">
                    <Button
                      className=""
                      onClick={() => handleProcess(row?.id, row?.status + 3)}
                      disabled={row?.status > 2}
                    >
                      {row?.status === 1 ? "Cancel" : "Cancel"}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
}
