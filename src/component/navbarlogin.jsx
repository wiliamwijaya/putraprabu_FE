import React from "react";
import "../css/navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const role = localStorage.getItem("role");

const Header = () => {
  const navigate = useNavigate();

  function populateStorage() {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    localStorage.removeItem("role");
    window.location.reload();
  }

  return (
    <Navbar className="navbar" expand="lg">
      <Container>
        <Nav className="navbarhome" onClick={() => navigate("/")}>
          <h3>
            <b>Putra Prabu</b>
          </h3>
        </Nav>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {role === "1" && (
              <Button class="btn btn2" onClick={() => navigate("/listproduct")}>
                Admin
              </Button>
            )}
            {role === "1" && (
              <Button
                className="btn"
                onClick={() => navigate("/history/admin")}
              >
                History <faClockRotateLeft />
              </Button>
            )}
            {role === "2" && (
              <Button className="btn" onClick={() => navigate("/history")}>
                History <faClockRotateLeft />
              </Button>
            )}
            <Button className="btn" onClick={() => populateStorage()}>
              Logout <faClockRotateLeft />
            </Button>

            {/* <Nav.Link href="#">
              <FaUserCircle size="25px" />
              <BsCartFill size="25px" />
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
