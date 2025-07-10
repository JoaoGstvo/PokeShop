
import React from "react";
import './cabecalho-principal.css';

function CabecalhoPrincipal() {
    return (
        <header className="cabecalho-principal">
            <div className="container-cabecalho">
                <div className="logotipo-principal">
                    <h1><i className="fas fa-bolt"></i> PokéShop</h1>
                </div>
                <nav className="navegacao-cabecalho">
                    <a href="/" className="link-navegacao">Início</a>
                    <a href="/#produtos" className="link-navegacao">Pokémons</a>
                    <a href="/carrinho" className="link-navegacao link-carrinho">
                        <i className="fas fa-shopping-cart"></i> Carrinho
                        <span className="contador-carrinho">2</span>
                    </a>
                    <a href="/login" className="link-navegacao link-autenticacao">Login</a>
                    <a href="/cadastro" className="link-navegacao link-autenticacao link-cadastro">Cadastro</a>
                </nav>
            </div>
        </header>
    );
}

export default CabecalhoPrincipal;
