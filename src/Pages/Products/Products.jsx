import './Products.css'
import Card from './Card'



function Products() {


      const produto1 = {
            foto: './produtos/enfeite1.jpeg',
            nome: 'Folhas Artesanais',
            descricao: 'Enfeite Multicor',
            preco: 'R$49,90'
      }
      const produto2 = {
            foto: './produtos/enfeite2.jpeg',
            nome: 'Macrame Pendurado',
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


      const produtos = [produto1, produto2, produto3, produto4]

      return (
            <>

                  <div className='flex'>
                        <Card info={produto1} />
                        <Card />
                        <Card />
                        <Card />


                  </div>

            </>



      )



}

export default Products