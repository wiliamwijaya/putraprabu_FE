import * as React from "react";
import Table from "@mui/material/Table";
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
import { faWhatsappSquare } from "@fortawesome/free-brands-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const token = localStorage.getItem("token");
const url = process.env.REACT_APP_BASE_URL;

export default function BasicTable() {
  const [data, setData] = React.useState([]);

  const fetchData = () => {
    axios
      .get(`${url}/orders/history/admin`, {
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
  };

  return (
    <>
      {token ? <Navbarlogin /> : <Navbar />}
      <ToastContainer />
      <Container sx={{ pt: 5 }}>
        <h4>
          silakan melakukan pembayaran dan mengirimkan bukti ke
          <a href="https://wa.link/mv65zr">
            <FontAwesomeIcon
              icon={faWhatsappSquare}
              className="fa-brands fa-1x"
              style={{ color: "#00ff04" }}
            />
          </a>
        </h4>
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
                  <TableCell align="right">
                    {generateStatus(row?.status)}
                  </TableCell>
                </TableRow>
              ))}
              <p></p>
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
}
