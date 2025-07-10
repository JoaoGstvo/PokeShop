import React from "react";
import "./index.css";
import Header from '../../Components/Header/header.js';
import Footer from '../../Components/Footer/footer.js';

function Cadastro() {
    return (
        <main className="cadastro-page">
            <Header />
            <section className="auth-section">
                <div className="container">
                    <div className="auth-container-login">
                        <div className="auth-decoration">
                            <div className="pokemon-silhouette">
                                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="Bulbasaur" />
                            </div>
                        </div>
                        <div className="auth-card">
                            <div className="auth-header">
                                <h2 id="titulo-cor-cadastro"><i className="fas fa-user-plus"></i> Cadastro</h2>
                                <p>Crie sua conta e comece sua aventura Pokémon</p>
                            </div>
                            <form className="auth-form auth-form-grid">
                                <div className="form-group">
                                    <label htmlFor="firstName">Nome</label>
                                    <input type="text" id="firstName" placeholder="Seu nome" className="form-input" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="lastName">Sobrenome</label>
                                    <input type="text" id="lastName" placeholder="Seu sobrenome" className="form-input" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" placeholder="Digite seu email" className="form-input" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Telefone</label>
                                    <input type="tel" id="phone" placeholder="(11) 99999-9999" className="form-input" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Senha</label>
                                    <input type="password" id="password" placeholder="Digite sua senha" className="form-input" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="confirmPassword">Confirmar Senha</label>
                                    <input type="password" id="confirmPassword" placeholder="Confirme sua senha" className="form-input" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="birthDate">Data de Nascimento</label>
                                    <input type="date" id="birthDate" className="form-input" />
                                </div>
                                <div className="form-group form-group-empty"></div>
                                <div className="form-group form-group-full">
                                    <label className="checkbox-container">
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                        Aceito os <a href="/" className="terms-link">termos de uso</a> e <a href="/" className="terms-link">política de privacidade</a>
                                    </label>
                                </div>
                                <div className="form-group form-group-full">
                                    <label className="checkbox-container">
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                        Quero receber novidades sobre Pokémons por email
                                    </label>
                                </div>
                                <div className="form-group form-group-full">
                                    <button type="submit" className="btn btn-primary btn-large">
                                        <i className="fas fa-user-plus"></i>
                                        Criar Conta
                                    </button>
                                </div>
                                <div className="form-group form-group-full">
                                    <div className="auth-divider">
                                        <span>ou</span>
                                    </div>
                                </div>
                                <div className="form-group form-group-full">
                                    <div className="auth-redirect">
                                        <p>Já tem uma conta? <a href="/login" className="auth-link-redirect">Faça login aqui</a></p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}

export default Cadastro;
