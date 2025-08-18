import './Banner.css'

function FolhasArtesanais() {

    return (

        <>
            <div className='global'>

                <div className='banner'>


                    <div className='image'>
                        <img src='public/produtos/enfeite1.jpeg' />
                    </div>



                    <div className='info'>
                         <strong className='infoTitle'>
                            Folhas Artesanais
                         </strong>
                         <strong className='infoDesc'>
                            Conjunto de ornamentos artesanais coloridos<br/>
                            feitos com riqueza de detalhes e acabamento delicado. <br/>
                            Peças únicas que transmitem charme e autenticidade. 
                         </strong>

                         <strong className='infoPrice'>
                            R$49.90
                         </strong>
                         <button type='Submit'>Adicionar ao Carrinho</button>
                    </div>

                </div>

            </div>
        </>
    )
}

export default FolhasArtesanais