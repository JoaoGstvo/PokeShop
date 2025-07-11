import React, { useState } from "react";
import './header-inicial.css';

function Header() {
    const [termoPesquisa, setTermoPesquisa] = useState('');

    const handlePesquisa = (e) => {
        e.preventDefault();
        console.log('Pesquisando por:', termoPesquisa);
        // Aqui você pode implementar a lógica de pesquisa
    };

    return (
        <header className="header">
            <div className="header-flex-custom">
                <div className="header-espaco" />
                <div className="logo">
                    <h1><i className="fas fa-bolt"></i> PokéShop</h1>
                </div>
                <div className="header-espaco-maior" />
                <div className="barra-pesquisa-container">
                    <form onSubmit={handlePesquisa} className="formulario-pesquisa">
                        <div className="campo-pesquisa">
                            <input
                                type="text"
                                placeholder="Pesquisar Pokémons..."
                                value={termoPesquisa}
                                onChange={(e) => setTermoPesquisa(e.target.value)}
                                className="entrada-pesquisa"
                            />
                            <button type="submit" className="botao-pesquisa">
                                <i className="fas fa-search"></i>
                            </button>
                        </div>
                    </form>
                </div>
                <div className="header-espaco-maior" />
                <nav className="nav-header">
                    <a href="/como-funciona" className="nav-link">Como funciona</a>
                    <a href="/#products" className="nav-link">Pokémons</a>
                    <a href="/" className="nav-link">Início</a>
                    <a href="/carrinho" className="nav-link cart-link">
                        <i className="fas fa-shopping-cart"></i> Carrinho
                        <span className="cart-count">2</span>
                    </a>
                    <a href="/login" className="nav-link nav-link-login">Login</a>
                    <a href="/cadastro" className="nav-link nav-link-cadastro">Cadastro</a>
                </nav>
                <div className="header-espaco" />
            </div>
        </header>
    );
}

export default Header;
