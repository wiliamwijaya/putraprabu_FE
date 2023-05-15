import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import axios from 'axios'
import { Container } from '@mui/material'
import Navbar from '../component/navbar'
import Navbarlogin from '../component/navbarlogin'
const token = localStorage.getItem('token')
const url = process.env.REACT_APP_BASE_URL

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein }
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
]

export default function BasicTable() {
  const [data, setData] = React.useState([])

  const fetchData = () => {
    axios
      .get(`${url}/orders/history`, {
        headers: { Authorization: token },
      })
      .then((res) => {
        setData(res?.data?.result)
      })
  }

  React.useEffect(() => {
    fetchData()
  }, [])

  const generateStatus = (value) => {
    if (value === 1) return 'Waiting List'
    if (value === 2) return 'On Process'
    if (value === 3) return 'Complete'
  }

  return (
    <>
      {token ? <Navbarlogin /> : <Navbar />}
      <Container sx={{ pt: 5 }}>
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
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <b> {row?.product?.name ?? 'Deleted Product'}</b>
                  </TableCell>
                  <TableCell align="center">{row?.id}</TableCell>
                  <TableCell align="center">x{row?.amount}</TableCell>
                  <TableCell align="center">Rp. {row?.total}</TableCell>
                  <TableCell align="right">
                    {generateStatus(row?.status)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  )
}
