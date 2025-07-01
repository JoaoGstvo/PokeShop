import React from "react";
import './footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>PokéShop</h3>
                        <p>A melhor loja de Pokémons do mundo!</p>
                    </div>
                    <div className="footer-section">
                        <h4>Links Úteis</h4>
                        <ul>
                            <li><a href="/">Início</a></li>
                            <li><a href="/#products">Pokémons</a></li>
                            <li><a href="/admin">Área Admin</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>Contato</h4>
                        <p>Email: contato@pokéshop.com</p>
                        <p>Telefone: (11) 99999-9999</p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2025 PokéShop. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
