import React from "react";
import "./index.css";
import Header from '../../Components/Header-Inicial/header-inicial.js';
import Footer from '../../Components/Footer/footer.js';

function Login() {
    return (
        <main className="pagina-login-usuario">
            <Header />
            
            <section className="secao-autenticacao-usuario">
                <div className="container-login-usuario">
                    <div className="container-login-usuario-conteudo">
                        <div className="cartao-login-usuario">
                            <div className="cabecalho-login-usuario" >
                                <h2 id="titulo-cor-login-usuario"><i className="fas fa-user"></i> Login </h2>
                                <p>Entre na sua conta para continuar sua jornada Pokémon</p>
                            </div>
                            
                            <form className="formulario-login-usuario">
                                <div className="grupo-formulario-login-usuario">
                                    <label htmlFor="email">Email</label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        placeholder="Digite seu email"
                                        className="campo-formulario-login-usuario"
                                    />
                                </div>
                                
                                <div className="grupo-formulario-login-usuario">
                                    <label htmlFor="password">Senha</label>
                                    <input 
                                        type="password" 
                                        id="password" 
                                        placeholder="Digite sua senha"
                                        className="campo-formulario-login-usuario"
                                    />
                                </div>
                                
                                <div className="opcoes-formulario-login-usuario">
                                    <label className="container-checkbox-login-usuario">
                                        <input type="checkbox" />
                                        <span className="marcador-checkbox-login-usuario"></span>
                                        Lembrar de mim
                                    </label>
                                    <a href="/" className="link-esqueci-senha-login-usuario">Esqueceu a senha?</a>
                                </div>
                                
                                <button id="cor-botao-login-usuario" type="submit" className="botao-login-usuario botao-grande-login-usuario">
                                    <i className="fas fa-sign-in-alt"></i>
                                    Entrar
                                </button>
                                
                                <div className="divisor-login-usuario">
                                    <span>ou</span>
                                </div>
                                
                                <div className="redirecionamento-login-usuario" >
                                    <p>Não tem uma conta? <a  id="titulo-cor-login-usuario-cadastro" href="/cadastro" className="link-redirecionamento-login-usuario">Cadastre-se aqui</a></p>
                                </div>
                            </form>
                        </div>
                        
                        <div className="decoracao-login-usuario">
                            <div className="silhueta-pokemon-login-usuario">
                                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" alt="Pikachu" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <Footer />
        </main>
    );
}

export default Login;
