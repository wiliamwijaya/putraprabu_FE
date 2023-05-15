import React, { useEffect, useState } from 'react'
import Navbar from '../component/navbar'
import Navbarlogin from '../component/navbarlogin'
import '../css/listproduct.css'
import {
  Grid,
  Card,
  Container,
  CardMedia,
  CardContent,
  Button,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const token = localStorage.getItem('token')
const role = localStorage.getItem('role')
const url = process.env.REACT_APP_BASE_URL

export default function Listproduct() {
  const history = useNavigate()
  const [data, setData] = useState([])

  const fetchData = () => {
    axios
      .get(`${url}/products`, {
        headers: { Authorization: token },
      })
      .then((res) => {
        setData(res?.data?.result)
      })
  }

  useEffect(() => {
    if (role === '1') fetchData()
    else history('/')
  }, [role])

  return (
    <Grid>
      {token ? <Navbarlogin /> : <Navbar />}
      <Grid className="col-12 text-center pt-3">
        {role === '1' && (
          <Button
            className="btn"
            onClick={() => history('/createproduct')}
            sx={{ mr: 1 }}
            variant="outlined"
          >
            tambah product
          </Button>
        )}
        <Button
          className="btn"
          onClick={() => history('/orderlist')}
          sx={{ ml: 1 }}
          variant="contained"
        >
          Order
        </Button>
      </Grid>
      <Container sx={{ border: 'none' }}>
        <Grid container spacing={3} sx={{ mt: 3 }}>
          {data.map((res, i) => (
            <Grid item xs={3} key={i}>
              <Card
                onClick={() => history(`/product/${res.id}`)}
                style={{ height: 'auto' }}
              >
                <CardMedia
                  component="img"
                  src={
                    res?.img ??
                    'https://www.snapon.co.za/images/thumbs/default-image_550.png'
                  }
                  style={{ height: '150px' }}
                />
                <CardContent>
                  <b>{res.name ?? '-'}</b>
                </CardContent>
                <CardContent>{res.category ?? '-'}</CardContent>
                <CardContent>Rp. {res.price ?? 0}</CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Grid>
  )
}
