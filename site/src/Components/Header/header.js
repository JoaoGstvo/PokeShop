import React from "react";
import './header.css';

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                    <h1><i className="fas fa-bolt"></i> PokéShop</h1>
                </div>
                <nav className="nav-header">
                    <a href="/" className="nav-link">Início</a>
                    <a href="/#products" className="nav-link">Pokémons</a>
                    <a href="/carrinho" className="nav-link cart-link">
                        <i className="fas fa-shopping-cart"></i> Carrinho
                        <span className="cart-count">2</span>
                    </a>
                    <a href="/login" className="nav-link auth-link">Login</a>
                    <a href="/cadastro" className="nav-link auth-link cadastro-link">Cadastro</a>
                </nav>
            </div>
        </header>
    );
}

export default Header;
