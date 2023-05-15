import React from "react";
import "../css/Register.css";
import {
  Grid,
  Box,
  Typography,
  FormControl,
  Button,
  OutlinedInput,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const url = process.env.REACT_APP_BASE_URL;

export default function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [nama, setNama] = React.useState("");
  const [alamat, setAlamat] = React.useState("");
  const [notelephone, setTelephone] = React.useState("");

  const handleregister = (e) => {
    e.preventDefault();
    console.log(nama);
    if (
      nama === "" ||
      email === "" ||
      password === "" ||
      alamat === "" ||
      notelephone === ""
    ) {
      alert("tidak boleh kosong");
    } else {
      const data = {
        email,
        password,
        username: nama,
        address: alamat,
        phone: notelephone,
        role: 2,
      };
      axios.post(`${url}/auth/register`, data).then((res) => {
        navigate("/login");
      });
    }
  };

  return (
    <div>
      <Grid item xs={12} sm={12} md={5} lg={6} square>
        <Box
          className="login-box"
          sx={{
            px: 6,
            py: 12,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h6"
            gutterBottom
            component="div"
            fontWeight="bold"
          >
            Daftar
          </Typography>

          <Box component="form" noValidate sx={{ mt: 1 }}>
            <FormControl fullWidth sx={{ mb: 2 }}>
              <Typography variant="caption" display="block" gutterBottom>
                Email
              </Typography>
              <OutlinedInput
                id="email"
                size="small"
                name="email"
                label="Email"
                placeholder="johndee@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
                sx={{ borderRadius: "16px", fontSize: "14px" }}
              />
            </FormControl>

            <FormControl fullWidth sx={{ mb: 2 }}>
              <Typography variant="caption" display="block" gutterBottom>
                Password
              </Typography>
              <OutlinedInput
                type="password"
                size="small"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                sx={{ borderRadius: "16px", fontSize: "14px" }}
                label="Password"
              />
            </FormControl>

            <FormControl fullWidth sx={{ mb: 2 }}>
              <Typography variant="caption" display="block" gutterBottom>
                Username
              </Typography>
              <OutlinedInput
                size="small"
                label="Username"
                placeholder="super_admin"
                onChange={(e) => setNama(e.target.value)}
                sx={{ borderRadius: "16px", fontSize: "14px" }}
              />
            </FormControl>

            <FormControl fullWidth sx={{ mb: 2 }}>
              <Typography variant="caption" display="block" gutterBottom>
                Alamat
              </Typography>
              <OutlinedInput
                size="small"
                label="Nama"
                onChange={(e) => setAlamat(e.target.value)}
                placeholder="Jl.kenari no 20, gunung ibul, palembang"
                sx={{ borderRadius: "16px", fontSize: "14px" }}
              />
            </FormControl>

            <FormControl fullWidth sx={{ mb: 2 }}>
              <Typography variant="caption" display="block" gutterBottom>
                No Telephone
              </Typography>
              <OutlinedInput
                size="small"
                type="tel"
                label="telephone"
                onChange={(e) => setTelephone(e.target.value)}
                placeholder="081327648592"
                sx={{ borderRadius: "16px", fontSize: "14px" }}
              />
            </FormControl>

            <div className="d-grid gap-2">
              <Button
                size="lg"
                style={{
                  marginBottom: "10px",
                  marginTop: "10px",
                  backgroundColor: "#7126B5",
                  color: "white",
                  borderRadius: "16px",
                  fontSize: "14px",
                  fontFamily: "Poppins",
                }}
                onClick={handleregister}
              >
                Daftar
              </Button>
            </div>

            <Grid container justifyContent="center" className="hrf">
              <Grid item>
                <Typography variant="subtitle2" gutterBottom component="div">
                  Sudah punya akun?
                  <Button
                    variant="body2"
                    style={{ color: "purple" }}
                    onClick={() => navigate("/Login")}
                  >
                    Login Disini
                  </Button>
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </div>
  );
}
