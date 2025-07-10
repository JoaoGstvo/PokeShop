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
            <div className="container">
                <div className="logo">
                    <h1><i className="fas fa-bolt"></i> PokéShop</h1>
                </div>
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
                <nav className="nav-header">
                    <a href="/" className="nav-link">Início</a>
                    <a href="/#products" className="nav-link">Pokémons</a>
                    <a href="/carrinho" className="nav-link cart-link">
                        <i className="fas fa-shopping-cart"></i> Carrinho
                        <span className="cart-count">2</span>
                    </a>
                    <a href="/login" className="nav-link auth-link">Login</a>
                    <a href="/cadastro" className="nav-link cadastro-link">Cadastro</a>
                </nav>
            </div>
        </header>
    );
}

export default Header;
