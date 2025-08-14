import './Cart.css'
import { BsCartCheck, BsTruck, BsFillTrashFill } from "react-icons/bs";
import 'bootstrap/dist/css/bootstrap.min.css'



function Cart() {   // os valores utilizados serão tragos do componente produtos(props)
    return (
        <>

           

            <div className='cart'>
                <div>
                    <div className='list'>

                        <div className='header'>
                            <div className='product'>
                                <strong>Produtos</strong>

                            </div>

                            <div className='amount'>
                                <strong>Quantidade</strong>

                            </div>

                            <div className='price'>
                                <strong>Preço</strong>

                            </div>
                        </div>

                        <div className='display'>

                            <div id='a'>
                                1
                            </div>

                            <div id='b'>
                                2
                            </div>

                            <div id='c'>
                                3
                            </div>

                            <div className='icon'>
                                <BsFillTrashFill size={20} className='text-white' />
                            </div>
                        </div>
                    </div>


                    <div className='frete'>
                        <input type='number' placeholder='CEP'>
                        </input>
                        <button><BsTruck size={25} />  Calcular</button>
                    </div>
                </div>





                <div className='resume1'>
                    <div className='resume'>
                        <div className='title1'>
                            <strong className='titleStrong'>Resumo</strong>
                        </div>


                        <div className='subTotal'>
                            <strong className='strong'>Subtotal</strong>
                            <div id='subTotalId'>1</div>
                        </div>

                        <div className='total'>
                            <strong>Total</strong>
                            <div id='totalId'>1</div>
                        </div>

                        <div className='resumeTotal'>
                            <strong>à vista</strong>
                            <div id='total'>
                                1
                                <div />
                            </div>
                            <strong className='discount'>
                                no PIX com 15% de desconto
                            </strong>
                        </div>
                    </div>



                    <div className='button' id='btn'>
                        <BsCartCheck />
                        <strong>
                            Finalizar Pedido
                        </strong>
                    </div>

                </div>


            </div>


           
        </>
    )
}

export default Cart
