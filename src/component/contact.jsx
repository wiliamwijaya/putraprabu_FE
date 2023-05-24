import React from "react";
import "../css/contact.css";
import { Grid, Container, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  return (
    <Container className="py-5">
      <Grid className="container">
        <Grid className="bg">
          <Grid className="row p-5">
            <h2 className="pt-2">Chat kami sekarang untuk bubut</h2>
            <p className="font">
              Jika mesin atau barang yang ingin di bubut kami dapat membubut
              barang anda sesuai keinginan kalian. kalian dapat dengan mengechat
              atau hubungi kami.
            </p>
            <Grid className="col-12 text-center pt-3">
              <a href="https://wa.link/yfj2bl">
                <Button class="btn">Hubungi</Button>
              </a>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
