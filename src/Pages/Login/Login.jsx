import './Login.css'
import { Link } from 'react-router-dom'


function Login() {

    return (

        <>
            <div className="main2">
                <div className="mainLogin2">
                    <strong className="titleStrong2">Login</strong>

                    <form className="form2" action="/">
                        <input
                            type="text"
                            id="email2"
                            name="email2"
                            className="input2"
                            placeholder="E-Mail"
                            required
                        />
                        <div className="line2"></div>

                        <input
                            type="password"
                            id="senha2"
                            name="senha2"
                            className="input12"
                            placeholder="Senha"
                            required
                        />
                        <div className="line2"></div>

                        <div className="loginButton2" id="loginButton2">
                            <div className="spacer2"></div>
                            <strong className="buttonStrong2">Login</strong>
                        </div>

                        <div className="cont2">
                            <Link to='/Cadastro' className="signin2"><strong>Não possui uma conta ?</strong></Link>
                        </div>
                    </form>
                </div >
            </div >



        </>
    )


}
export default Login