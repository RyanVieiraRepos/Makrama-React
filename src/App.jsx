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

import FolhasArtesanais from './Pages/Products/Produtos/Banner/FolhasArtesanais.jsx'
import OrnamentoSuspenso from './Pages/Products/Produtos/Banner/OrnamentoSuspenso.jsx'
import SuporteParaVaso from './Pages/Products/Produtos/Banner/SuporteParaVaso.jsx'
import SuporteParaVasoPequeno from './Pages/Products/Produtos/Banner/SuporteParaVasoPequeno.jsx'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>

            <Route index element={<Home />} />
            <Route path='Home' element={<Home />} />
            <Route path="Cadastro" element={<Cad />} />
            <Route path='Carrinho' element={<Cart />} />
            <Route path='Login' element={<Login />} />
            <Route path='Produtos' element={<Products />} />
            <Route path='SobMedida' element={<SobMedida />} />
            <Route path='FolhasArtesanais' element={<FolhasArtesanais />} />
            <Route path='OrnamentoSuspenso' element={<OrnamentoSuspenso />} />
            <Route path='SuporteParaVaso' element={<SuporteParaVaso />} />
            <Route path="*" element={<NoPage />} />

          </Route>

        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
