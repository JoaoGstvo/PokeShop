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
                    <a href="/admin" className="nav-link admin-link">Área Admin</a>
                </nav>
            </div>
        </header>
    );
}

export default Header;
