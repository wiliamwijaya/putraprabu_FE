import React from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Grid,
  Box,
  Stack,
} from "@mui/material";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  return (
    <Grid
      container
      component="main"
      sx={{ height: "100vh", overflowX: "hidden" }}
    >
      <AppBar
        position="absolute"
        sx={{
          position: "relative",
          backgroundColor: "white",
          alignItems: "center",
        }}
      >
        <Toolbar>
          <Typography
            className="titleprofile"
            variant="subtitle2"
            component="div"
            color="black"
          >
            Lengkapi Info Akun
          </Typography>
        </Toolbar>
      </AppBar>

      <Grid container sx={{ height: "100vh" }}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Box
            className="profil-box"
            sx={{
              mt: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Stack direction="row" spacing={30}>
              <IconButton
                aria-label="arrow back"
                sx={{ ml: "-300px" }}
                onClick={() => {
                  navigate("/");
                }}
              ></IconButton>
            </Stack>

            <Box noValidate sx={{ mt: 3, width: 400, height: 400 }}>
              <div className="forminfo">
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Nama*</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      style={{
                        borderRadius: "16px",
                        fontSize: "14px",
                        fontFamily: "Poppins",
                      }}
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Alamat*</Form.Label>
                    <Form.Control
                      type="text"
                      as="textarea"
                      rows={3}
                      name="address"
                      style={{
                        borderRadius: "16px",
                        fontSize: "14px",
                        fontFamily: "Poppins",
                      }}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Kota*</Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      name="city"
                      style={{
                        borderRadius: "16px",
                        fontSize: "14px",
                        fontFamily: "Poppins",
                      }}
                    >
                      <option>Pilih Kota</option>
                      <option value="1">Jakarta</option>
                      <option value="2">Bandung</option>
                      <option value="3">Bogor</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>No Handphone*</Form.Label>
                    <Form.Control
                      type="number"
                      name="phoneNumber"
                      style={{
                        borderRadius: "16px",
                        fontSize: "14px",
                        fontFamily: "Poppins",
                      }}
                    />
                  </Form.Group>
                </Form>

                <div className="d-grid gap-2">
                  <Button
                    className="hrsf"
                    size="lg"
                    style={{
                      marginTop: "10px",
                      backgroundColor: "#7126B5",
                      borderRadius: "16px",
                      fontSize: "14px",
                    }}
                  >
                    Simpan
                  </Button>
                </div>
                <br />
              </div>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}
