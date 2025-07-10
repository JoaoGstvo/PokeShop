
import React from "react";
import './rodape-principal.css';

function RodapePrincipal() {
    return (
        <footer className="rodape-principal">
            <div className="container-rodape">
                <div className="conteudo-rodape">
                    <div className="secao-rodape" id="logotipo-rodape">
                        <h3>PokéShop</h3>
                        <p>A melhor loja de Pokémons do mundo!</p>
                    </div>
                    <div className="secao-rodape">
                        <h4>Links Úteis</h4>
                        <ul>
                            <li><a href="/">Início</a></li>
                            <li><a href="/#produtos">Pokémons</a></li>
                        </ul>
                    </div>
                    <div className="secao-rodape">
                        <h4>Contato</h4>
                        <p>Email: contato@pokéshop.com</p>
                        <p>Telefone: (11) 99999-9999</p>
                    </div>

                    <div className="secao-rodape" id="botao-administrativo">
                        <a href="/login-administrativo" className="link-navegacao link-administrativo">Área Admin</a>
                    </div>
                </div>
                <div className="base-rodape">
                    <p>&copy; 2025 PokéShop. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}

export default RodapePrincipal;
