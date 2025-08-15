import './Products.css'
import Card from './Card'

import { Link } from 'react-router-dom'


function Products() {


      const produto1 = {
            foto: './produtos/enfeite1.jpeg',
            nome: 'Folhas Artesanais',
            descricao: 'Enfeite Multicor',
            preco: 'R$49,90'
      }
      const produto2 = {
            foto: './produtos/enfeite2.jpeg',
            nome: 'Ornamento Suspenso',
            descricao: 'Enfeite Vermelho',
            preco: 'R$29,90'
      }
      const produto3 = {
            foto: './produtos/suporte1.jpeg',
            nome: 'Suporte p/ Vaso',
            descricao: 'Suporte branco',
            preco: 'R$59,90'
      }
      const produto4 = {
            foto: './produtos/suporte2.jpeg',
            nome: 'Suporte Para Vaso Pequeno',
            descricao: 'Suporte pequeno branco',
            preco: 'R$24,90'
      }




      return (
            <>

                  <div className='flex'>
                        <Link className='link' to='FolhasArtesanais'> <Card info={produto1} /></Link>
                        <Link className='link' to='OrnamentoSuspenso'> <Card info={produto2} /></Link>
                        <Link className='link' to='SuporteParaVaso'> <Card info={produto3} /></Link>
                        <Link className='link' to='SuporteParaVasoPequeno'> <Card info={produto4} /></Link>


                  </div>

            </>



      )



}

export default Products