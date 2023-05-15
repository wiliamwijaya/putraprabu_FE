import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from 'react-router-dom'
import Landingpage from './pages/home'
import Login from './pages/Login'
import Register from './pages/Register'
// import Profile from "./pages/Profile";
import Detailproduct from './pages/DetailProduct'
import CreateProduct from './pages/Createproduct'
import Listproduct from './pages/Listproduct'
import Order from './pages/Order'
import History from './pages/History'

function App() {
  const halaman = [
    { path: '/', component: <Landingpage /> },
    { path: '/login', component: <Login /> },
    { path: '/register', component: <Register /> },
    // { path: "/akunprofile", component: <Profile /> },
    { path: '/product/:id', component: <Detailproduct /> },
    { path: '/createproduct', component: <CreateProduct /> },
    { path: '/listproduct', component: <Listproduct /> },
    { path: '/orderlist', component: <Order /> },
    { path: '/history', component: <History /> },
  ]

  return (
    <div>
      <Routes>
        {halaman.map((row, i) => (
          <Route key={i} exact path={row.path} element={row.component}></Route>
        ))}
      </Routes>
    </div>
  )
}

export default App
