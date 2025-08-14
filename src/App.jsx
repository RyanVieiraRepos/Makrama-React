import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Cad from './Pages/Cad/Cad.jsx'
import Cart from './Pages/Cart/Cart.jsx'
import Login from './Pages/Login/Login.jsx'
import Products from './Pages/Products/Products.jsx'
import SobMedida from './Pages/sobMedida/SobMedida.jsx'
import Home from './Pages/Home/Home.jsx'
import NoPage from './Pages/NoPage/NoPage.jsx'

import Layout from './Layout.jsx'




function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>

            <Route index element={<Home />} />
            <Route path="./Cadastro" element={<Cad />} />
            <Route path='./Carrinho' element={<Cart />} />
            <Route path='./Login' element={<Login />} />
            <Route path='./Produtos' element={<Products />} />
            <Route path='./SobMedida' element={<SobMedida />} />
            <Route path="*" element={<NoPage />} />

          </Route>

        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
