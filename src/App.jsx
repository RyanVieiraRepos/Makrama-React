import { useState } from 'react'
import Cad from './Pages/Cad/Cad.jsx'
import Cart from './Pages/Cart/Cart.jsx'
import Login from './Pages/Login/Login'
import Products from './Pages/Products/Products'
import sobMedida from './Pages/sobMedida/sobMedida'
import Home from './Pages/Home/Home'
import Header from './Header.jsx'
import Footer from './Footer.jsx'


function App() {


  const produtos = {
    produto1: {
      foto: './',
      nome: './',
      descricao: '',
      preco: ''
    },
    produto2: {
      foto: './',
      nome: './',
      descricao: '',
      preco: ''
    },
    produto3: {
      foto: './',
      nome: './',
      descricao: '',
      preco: ''
    },
  }



  return (
    <>

      <Header />



      <Cart />



      <Footer />

    </>
  )
}

export default App
