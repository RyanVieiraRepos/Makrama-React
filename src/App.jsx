import { useState } from 'react'
import Cad from './Pages/Cad/Cad.jsx'
import Cart from './Pages/Cart/Cart.jsx'
import Login from './Pages/Login/Login'
import Products from './Pages/Products/Products'
import sobMedida from './Pages/sobMedida/sobMedida'
import Home from './Pages/Home/Home'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Card from './Pages/Products/Card.jsx'
import './App.css'
function App() {


  
    const produto1 = {
      foto: './enfeite1.jpeg',
      nome: 'Folhas Artesanais',
      descricao: 'Enfeite Multicor',
      preco: 'R$49,90'
    }
   const produto2 = {
      foto: './enfeite2.jpeg',
      nome: 'Macrame Pendurado',
      descricao: 'Enfeite Vermelho',
      preco: 'R$29,90'
    }
   const produto3 = {
      foto: './suporte1.jpeg',
      nome: 'Suporte p/ Vaso',
      descricao: 'Suporte branco',
      preco: 'R$59,90'
    }
   const produto4 = {
      foto: './suporte2.jpeg',
      nome: 'Suporte Para Vaso Pequeno',
      descricao: 'Suporte pequeno branco',
      preco: 'R$24,90'
    }
  

const produtos = [produto1, produto2, produto3, produto4]

  return (
    <>

      <Header />


      <div className='flex'>
         <Card info={produto1}/>
         
      </div>
     



      <Footer />

    </>
  )
}

export default App
