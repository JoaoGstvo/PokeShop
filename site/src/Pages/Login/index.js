
import React from "react";
import "./index.css";
import Header from '../../Components/Header/header.js';
import Footer from '../../Components/Footer/footer.js';

function Login() {
    return (
        <main className="login-page">
            <Header />
            
            <section className="auth-section">
                <div className="container">
                    <div className="auth-container-login">
                        <div className="auth-card">
                            <div className="auth-header" >
                                <h2 id="titulo-cor"><i className="fas fa-user"></i> Login</h2>
                                <p>Entre na sua conta para continuar sua jornada Pokémon</p>
                            </div>
                            
                            <form className="auth-form">
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        placeholder="Digite seu email"
                                        className="form-input"
                                    />
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="password">Senha</label>
                                    <input 
                                        type="password" 
                                        id="password" 
                                        placeholder="Digite sua senha"
                                        className="form-input"
                                    />
                                </div>
                                
                                <div className="form-options">
                                    <label className="checkbox-container">
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                        Lembrar de mim
                                    </label>
                                    <a href="/" className="forgot-link">Esqueceu a senha?</a>
                                </div>
                                
                                <button id="cor-btn-login" type="submit" className="btn btn-primary btn-large">
                                    <i className="fas fa-sign-in-alt"></i>
                                    Entrar
                                </button>
                                
                                <div className="auth-divider">
                                    <span>ou</span>
                                </div>
                                
                                <div className="auth-redirect" >
                                    <p>Não tem uma conta? <a  id="titulo-cor" href="/cadastro" className="auth-link-redirect">Cadastre-se aqui</a></p>
                                </div>
                            </form>
                        </div>
                        
                        <div className="auth-decoration">
                            <div className="pokemon-silhouette">
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
