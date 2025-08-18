import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Cad from './Pages/Cad/Cad.jsx'
import Cart from './Pages/Cart/Cart.jsx'
import Login from './Pages/Login/Login.jsx'
import Products from './Pages/Products/Products.jsx'
import Sobre from './Pages/Sobre/Sobre.jsx'
import Home from './Pages/Home/Home.jsx'
import NoPage from './Pages/NoPage/NoPage.jsx'

import Layout from './Layout.jsx'

import FolhasArtesanais from './Pages/Products/Produtos/FolhasArtesanais'
import OrnamentoSuspenso from './Pages/Products/Produtos/OrnamentoSuspenso.jsx'
import SuporteParaVaso from './Pages/Products/Produtos/SuporteParaVaso.jsx'
import SuporteParaVasoPequeno from './Pages/Products/Produtos/SuporteParaVasoPequeno.jsx'


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
            <Route path='Sobre' element={<Sobre />} />
            <Route path='Produtos/FolhasArtesanais' element={<FolhasArtesanais />} />
            <Route path='Produtos/OrnamentoSuspenso' element={<OrnamentoSuspenso />} />
            <Route path='Produtos/SuporteParaVaso' element={<SuporteParaVaso />} />
            <Route path='Produtos/SuporteParaVasoPequeno' element={<SuporteParaVasoPequeno />} />
            <Route path="*" element={<NoPage />} />

          </Route> 

        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
