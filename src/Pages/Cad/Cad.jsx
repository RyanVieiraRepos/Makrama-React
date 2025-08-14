import './Cad.css'

function Cad() {
    return (
        <>
            
            <div className="main">
                <div className="mainCadastro">
                    <form action="/" method="POST">
                        <div className="cont">
                            <input type="text" id="nome" name="nome" className="input" placeholder="Nome" required />
                            <input type="text" id="sobrenome" name="sobrenome" className="input" placeholder="Sobrenome" required />
                        </div>

                        <div className="cont">
                            <input type="text" id="email" name="email" className="input" placeholder="E-mail" required />
                            <input type="password" id="password" name="password" className="input" placeholder="Senha" required />
                        </div>

                        <div className="cont">
                            <input
                                type="number"
                                id="cep"
                                name="cep"
                                className="input"
                                placeholder="CEP"
                                required
                                pattern="\d{5}-\d{3}"
                            />
                            <input type="number" id="numero" name="numero" className="input" placeholder="Número" required />
                        </div>

                        <div className="cont">
                            <input
                                type="tel"
                                id="celular"
                                name="celular"
                                className="input1"
                                placeholder="Celular"
                                required
                                pattern="\d{5}-\d{3}"
                            />
                            <div className="dateCont">
                                <strong className="dateStrong"> Data de nascimento </strong>
                                <input className="date" id="date" name="date" type="date" />
                            </div>
                        </div>

                        <div className="buttons">
                            <input type="submit" className="cadButton" value="Cadastre-se" />
                            <a href="https://ryanvieirarepos.github.io/Makrama/Pages/login/login.html">Já possui uma conta ?</a>
                        </div>
                    </form>
                </div>
            </div>
            


        </>
    )
}


export default Cad