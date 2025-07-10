
import React, { useState } from "react";
import './header-logado.css';
import PerfilUsuario from '../PerfilUsuario/perfil-usuario';

function HeaderLogado() {
    const [perfilAberto, setPerfilAberto] = useState(false);

    const togglePerfil = () => {
        setPerfilAberto(!perfilAberto);
    };

    return (
        <header className="header-logado">
            <div className="container">
                <div className="logo">
                    <h1><i className="fas fa-bolt"></i> PokéShop</h1>
                </div>
                <nav className="nav-header-logado">
                    <a href="/como-funciona" className="nav-link">Como funciona</a>
                    <a href="/" className="nav-link">Início</a>
                    <a href="/#products" className="nav-link">Pokémons</a>
                    <a href="/carrinho" className="nav-link cart-link">
                        <i className="fas fa-shopping-cart"></i> Carrinho
                        <span className="cart-count">2</span>
                    </a>
                    <div className="perfil-container">
                        <div className="perfil-avatar" onClick={togglePerfil}>
                            <img src="https://via.placeholder.com/40x40/3b82f6/ffffff?text=U" alt="Perfil" />
                        </div>
                        {perfilAberto && <PerfilUsuario />}
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default HeaderLogado;
