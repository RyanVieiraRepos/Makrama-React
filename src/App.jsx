import { useState } from 'react'
import Cad from './Pages/Cad/Cad'
import Cart from './Pages/Cart/Cart'
import Login from './Pages/Login/Login'
import Products from './Pages/Products/Products'
import sobMedida from './Pages/sobMedida/sobMedida'
import Home from './Pages/Home/Home'
import './App.css'

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
    produto3:{
      foto: './',
      nome: './',
      descricao: '',
      preco: ''
    },
  }



  return (
    <>
      <div id='0'>
        <Header />
      </div>

      <div id='1'>
        <Home />
      </div>

      <div id='2'>
        <Footer />
      </div>
    </>
  )
}

export default App
