import React, { useEffect } from "react";
import "../css/createproduct.css";
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
import Navbar from "../component/navbar";
import Navbarlogin from "../component/navbarlogin";
import { toast } from "react-toastify";

const isLogin = localStorage.getItem("access_token");
const token = localStorage.getItem("token");
const url = process.env.REACT_APP_BASE_URL;
const role = localStorage.getItem("role");

export default function Createproduct() {
  const navigate = useNavigate();
  const [productname, setproductname] = React.useState("");
  const [price, setprice] = React.useState("");
  const [category, setcategory] = React.useState("");
  const [deskripsi, setdeskripsi] = React.useState("");
  const [gambar, setgambar] = React.useState("");
  const [stock, setStock] = React.useState("");

  const handlecreateproduct = (e) => {
    e.preventDefault();
    if (
      productname === "" ||
      price === "" ||
      category === "" ||
      deskripsi === "" ||
      gambar === ""
    ) {
      toast.error("data tidak boleh kosong", {
        position: "top-center",
        autoClose: 750,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      const data = {
        name: productname,
        price,
        category,
        description: deskripsi,
        img: gambar,
        stock,
      };
      axios
        .post(`${url}/products`, data, {
          headers: { Authorization: token },
        })
        .then((res) => {
          toast.success("Barang Berhasil Di tambah!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          navigate("/listproduct");
        });
    }
  };

  useEffect(() => {
    if (role !== "1") navigate("/");
  }, [role]);

  return (
    <>
      {token ? <Navbarlogin /> : <Navbar />}
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
              Create Product
            </Typography>

            <Box sx={{ mt: 1 }}>
              <FormControl fullWidth sx={{ mb: 2 }}>
                <Typography variant="caption" display="block" gutterBottom>
                  Nama Product
                </Typography>
                <OutlinedInput
                  id="NamaProduct"
                  size="small"
                  name="NamaProduct"
                  label="NamaProduct"
                  placeholder="Contoh: Baut, Stang"
                  onChange={(e) => setproductname(e.target.value)}
                  sx={{ borderRadius: "16px", fontSize: "14px" }}
                />
              </FormControl>

              <FormControl fullWidth sx={{ mb: 2 }}>
                <Typography variant="caption" display="block" gutterBottom>
                  Harga
                </Typography>
                <OutlinedInput
                  id="harga"
                  size="small"
                  name="harga"
                  label="harga"
                  placeholder="Contoh: 20.000"
                  onChange={(e) => setprice(e.target.value)}
                  sx={{ borderRadius: "16px", fontSize: "14px" }}
                />
              </FormControl>

              <FormControl fullWidth sx={{ mb: 2 }}>
                <Typography variant="caption" display="block" gutterBottom>
                  Stock
                </Typography>
                <OutlinedInput
                  id="stock"
                  size="small"
                  name="stock"
                  label="stock"
                  placeholder="Contoh: 100"
                  onChange={(e) => setStock(e.target.value)}
                  sx={{ borderRadius: "16px", fontSize: "14px" }}
                  type="number"
                />
              </FormControl>

              <FormControl fullWidth sx={{ mb: 2 }}>
                <Typography variant="caption" display="block" gutterBottom>
                  Category
                </Typography>
                <OutlinedInput
                  id="category"
                  size="small"
                  name="category"
                  label="category"
                  placeholder="Contoh: Sparepart, mobil, motor"
                  onChange={(e) => setcategory(e.target.value)}
                  sx={{ borderRadius: "16px", fontSize: "14px" }}
                />
              </FormControl>

              <FormControl fullWidth sx={{ mb: 2 }}>
                <Typography variant="caption" display="block" gutterBottom>
                  Deskripsi
                </Typography>
                <OutlinedInput
                  id="deskripsi"
                  size="small"
                  name="deskripsi"
                  label="deskripsi"
                  placeholder=""
                  onChange={(e) => setdeskripsi(e.target.value)}
                  sx={{ borderRadius: "16px", fontSize: "14px" }}
                />
              </FormControl>

              <FormControl fullWidth sx={{ mb: 2 }}>
                <Typography variant="caption" display="block" gutterBottom>
                  Gambar Product
                </Typography>
                <OutlinedInput
                  id="gambar"
                  size="small"
                  name="gambar"
                  label="gambar"
                  placeholder="Hanya bisa Link gambar"
                  onChange={(e) => setgambar(e.target.value)}
                  sx={{ borderRadius: "16px", fontSize: "14px" }}
                />
              </FormControl>

              <Grid className="d-grid gap-2">
                <Button
                  size="lg"
                  variant="body2"
                  style={{
                    color: "white",
                    backgroundColor: "rgb(113, 38, 181)",
                    borderRadius: "25px",
                  }}
                  onClick={handlecreateproduct}
                  disabled={stock < 1}
                >
                  Buat
                </Button>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </div>
    </>
  );
}
