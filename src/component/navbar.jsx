import React from "react";
import "../css/navbar.css";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "@mui/material";
import { FiLogIn } from "react-icons/fi";
// import { FaUserCircle } from "react-icons/fa";
// import { BsCartFill } from "react-icons/bs";

const Header = () => {
  const navigate = useNavigate();

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
            <Button class="btn" onClick={() => navigate("/login")}>
              Masuk <FiLogIn />
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
