import React from "react";
import "../css/Login.css";
import { useEffect } from "react";
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
const token = localStorage.getItem("token");
const url = process.env.REACT_APP_BASE_URL;

export default function Login() {
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  const handlelogin = (e) => {
    e.preventDefault();
    if (email === "" || values.password === "") {
      alert("Email dan Password tidak boleh kosong");
    } else {
      const data = {
        username: email,
        password,
      };
      axios.post(`${url}/auth/login`, data).then((res) => {
        localStorage.setItem("token", res?.data?.data?.token);
        localStorage.setItem("id", res?.data?.data?.id);
        localStorage.setItem("role", res?.data?.data?.role);
        window.location.reload();
      });
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, []);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    setPassword(event.target.value);
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
            Masuk
          </Typography>

          <Box component="form" noValidate sx={{ mt: 1 }}>
            <FormControl fullWidth sx={{ mb: 2 }}>
              <Typography variant="caption" display="block" gutterBottom>
                Username
              </Typography>
              <OutlinedInput
                id="email"
                size="small"
                name="email"
                label="Username"
                placeholder="Contoh: super_admin"
                onChange={(e) => setEmail(e.target.value)}
                sx={{ borderRadius: "16px", fontSize: "14px" }}
              />
            </FormControl>

            <FormControl fullWidth sx={{ mb: 2 }}>
              <Typography variant="caption" display="block" gutterBottom>
                Password
              </Typography>
              <OutlinedInput
                size="small"
                placeholder="Password"
                onChange={handleChange("password")}
                sx={{ borderRadius: "16px", fontSize: "14px" }}
                type="password"
                label="Password"
              />
            </FormControl>

            <Grid className="d-grid gap-2">
              <Button
                size="lg"
                style={{
                  marginBottom: "10px",
                  marginTop: "10px",
                  backgroundColor: "#7126B5",
                  borderRadius: "16px",
                  color: "white",
                  fontSize: "14px",
                  fontFamily: "Poppins",
                }}
                onClick={handlelogin}
              >
                Masuk
              </Button>
            </Grid>

            <Grid container justifyContent="center" className="hrf">
              <Grid item>
                <Typography variant="subtitle2" gutterBottom component="div">
                  Belum punya akun?
                  <Button
                    variant="body2"
                    style={{ color: "purple" }}
                    onClick={() => navigate("/register")}
                  >
                    Daftar di sini
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
