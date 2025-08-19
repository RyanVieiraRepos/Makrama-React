import './Home.css'



function Home() {
    return (
        <>



            <main className="main1">

                <div className="imgCont" id="imgcont">
                    <img
                        src="https://ryanvieirarepos.github.io/Makrama/images/produto1.png"
                        className="img"
                        id="product"
                        alt="Produto artesanal"
                    />
                </div>

                <div className="text">
                    <strong className="titleMobile">Artesanais que aconchegam</strong>

                    <div className="CollectionStrong">
                        <strong className="collectionStrong"></strong>
                    </div>

                    <strong className="title">
                        A decoração que transforma o seu lar
                    </strong>

                    <br /><br />

                    <strong className="paragraph">
                        uma técnica manual que combina nós, texturas e formas delicadas para criar peças cheias de
                        personalidade. Feito à mão com fios naturais, o macramê é capaz de trazer aconchego, sofisticação e
                        autenticidade aos ambientes, transformando paredes, móveis e acessórios em verdadeiras obras de arte.
                        Ideal para quem busca uma decoração acolhedora e com significado, ele une tradição e estilo em cada
                        detalhe, valorizando o feito à mão e conectando o lar com a beleza do artesanal.
                    </strong>

                    <a className="homeButton" id="button" href='Produtos'>
                        Navegar
                    </a>
                </div>

            </main>




        </>
    )
}

export default Home