import './Cart.css'




function Cart() {   // os valores utilizados serão tragos do componente produtos(props)

    return (
        <>

            <div className='cart'>


                <div className='list'>

                    <div className='product'>
                        <strong>
                            Produtos
                        </strong>
                        <div id='products'></div>
                    </div>


                    <div className='amount'>
                        <strong>
                            Quantidade
                        </strong>

                        <div className='quant'>

                        </div>
                    </div>


                    <div className='price'>
                        <strong>
                            Preço á vista
                        </strong>
                        <div className='calc'>

                        </div>
                    </div>
                </div>

                <div className='resume'>
                    <strong className='resumeTitle'>
                        Resumo
                    </strong>
                    <div className='subtotal'>
                        <strong className='strong'>
                            Subtotal
                        </strong>
                        <div id='subTotal'></div>
                    </div>
                    <div className='total'>
                        <strong>
                            Total
                        </strong>
                    </div>
                    <div className='resumeTotal'>
                        <strong>
                            á vista
                        </strong>
                        <div id='total'>

                            <div />
                        </div>
                        <strong className='discount'>
                            no PIX com 15% de desconto
                        </strong>

                    </div>

                </div >
            </>
            )

}



            export default Cart 