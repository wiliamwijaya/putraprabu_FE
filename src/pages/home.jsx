import React, { useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import "../css/Home.css";
import { useEffect } from "react";
import Navbar from "../component/navbar";
import Navbarlogin from "../component/navbarlogin";
import Footer from "../component/footer";
import Whyus from "../component/whyus";
import Contact from "../component/contact";
import Foto from "../asset/image.png";
import Foto2 from "../asset/image2.jpg";
import Foto3 from "../asset/image3.jpg";
import { Row, Col } from "react-bootstrap";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const url = process.env.REACT_APP_BASE_URL;

const token = localStorage.getItem("token");

function Home() {
  const [data, setData] = useState([]);
  const history = useNavigate();

  const fetchData = () => {
    axios
      .get(`${url}/products`, {
        headers: { Authorization: token },
      })
      .then((res) => {
        setData(res?.data?.result);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {token ? <Navbarlogin /> : <Navbar />}
      <h1 className="text-center fw-bold opacity-75 p-3">
        WELCOME TO PUTRAPRABU
      </h1>
      <OwlCarousel
        loop={true}
        autoplay={true}
        autoplayTimeout={5000}
        center={true}
        responsive={{
          0: {
            items: 1,
          },
          800: {
            items: 1,
          },
          1000: {
            items: 2,
          },
        }}
      >
        <Row>
          <Col className="slide-card">
            <img
              style={{ height: "750px", objectFit: "cover" }}
              src={Foto}
              alt=""
            />
          </Col>
        </Row>
        <Row>
          <Col className="slide-card">
            <img
              style={{ height: "750px", objectFit: "cover" }}
              src={Foto2}
              alt=""
            />
          </Col>
        </Row>
        <Row>
          <Col className="slide-card">
            <img
              style={{ height: "750px", objectFit: "cover" }}
              src={Foto3}
              alt=""
            />
          </Col>
        </Row>
      </OwlCarousel>
      <Whyus />
      <Contact />

      <div className="card-product">
        {data && (
          <Container className="pb-3" sx={{ border: "none" }}>
            <h3 className="pb-2">Product</h3>
            <Grid container spacing={3}>
              {data.map((row, i) => (
                <Grid key={i} item xs={2} style={{ cursor: "pointer" }}>
                  {row?.stock > 0 && (
                    <Card
                      onClick={() => history(`/product/${row.id}`)}
                      style={{ height: "auto" }}
                    >
                      <CardMedia
                        component="img"
                        src={row?.img}
                        style={{ height: "150px" }}
                      />
                      <CardContent>
                        <Typography
                          style={{ whiteSpace: "nowrap", overflow: "hidden" }}
                        >
                          {row?.name}
                        </Typography>
                      </CardContent>
                      <CardContent>{row?.category}</CardContent>
                      <CardContent>Rp. {row?.price}</CardContent>
                    </Card>
                  )}
                </Grid>
              ))}
            </Grid>
          </Container>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default Home;
