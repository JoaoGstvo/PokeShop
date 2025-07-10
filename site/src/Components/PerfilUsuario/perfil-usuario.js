
import React, { useState } from "react";
import './perfil-usuario.css';
import AlterarInformacoes from './AlterarInformacoes/alterar-informacoes';
import MeusPedidos from './MeusPedidos/meus-pedidos';

function PerfilUsuario() {
    const [telaAtiva, setTelaAtiva] = useState('menu');

    const renderizarTela = () => {
        switch (telaAtiva) {
            case 'alterar':
                return <AlterarInformacoes voltar={() => setTelaAtiva('menu')} />;
            case 'pedidos':
                return <MeusPedidos voltar={() => setTelaAtiva('menu')} />;
            default:
                return (
                    <div className="perfil-menu">
                        <div className="perfil-header">
                            <div className="usuario-info">
                                <img src="https://via.placeholder.com/60x60/3b82f6/ffffff?text=U" alt="Avatar" />
                                <div className="usuario-dados">
                                    <h3>João Silva</h3>
                                    <p>joao.silva@email.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="perfil-opcoes">
                            <button 
                                className="opcao-perfil"
                                onClick={() => setTelaAtiva('alterar')}
                            >
                                <i className="fas fa-user-edit"></i>
                                <span>Alterar Informações</span>
                                <i className="fas fa-chevron-right"></i>
                            </button>
                            <button 
                                className="opcao-perfil"
                                onClick={() => setTelaAtiva('pedidos')}
                            >
                                <i className="fas fa-shopping-bag"></i>
                                <span>Meus Pedidos</span>
                                <i className="fas fa-chevron-right"></i>
                            </button>
                            <button className="opcao-perfil">
                                <i className="fas fa-heart"></i>
                                <span>Favoritos</span>
                                <i className="fas fa-chevron-right"></i>
                            </button>
                            <button className="opcao-perfil">
                                <i className="fas fa-cog"></i>
                                <span>Configurações</span>
                                <i className="fas fa-chevron-right"></i>
                            </button>
                            <div className="divisor"></div>
                            <button className="opcao-perfil opcao-sair">
                                <i className="fas fa-sign-out-alt"></i>
                                <span>Sair</span>
                            </button>
                        </div>
                    </div>
                );
        }
    };

    return (
        <div className="perfil-dropdown">
            {renderizarTela()}
        </div>
    );
}

export default PerfilUsuario;
