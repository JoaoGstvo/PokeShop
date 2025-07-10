
import React from "react";
import './alterar-informacoes.css';

function AlterarInformacoes({ voltar }) {
    return (
        <div className="tela-perfil">
            <div className="tela-header">
                <button className="btn-voltar" onClick={voltar}>
                    <i className="fas fa-arrow-left"></i>
                </button>
                <h3>Alterar Informações</h3>
            </div>
            
            <div className="form-alterar">
                <div className="avatar-section">
                    <div className="avatar-atual">
                        <img src="https://via.placeholder.com/80x80/3b82f6/ffffff?text=U" alt="Avatar" />
                        <button className="btn-alterar-foto">
                            <i className="fas fa-camera"></i>
                        </button>
                    </div>
                </div>

                <form className="form-dados">
                    <div className="form-group">
                        <label>Nome</label>
                        <input type="text" defaultValue="João" />
                    </div>
                    
                    <div className="form-group">
                        <label>Sobrenome</label>
                        <input type="text" defaultValue="Silva" />
                    </div>
                    
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" defaultValue="joao.silva@email.com" />
                    </div>
                    
                    <div className="form-group">
                        <label>Telefone</label>
                        <input type="tel" defaultValue="(11) 99999-9999" />
                    </div>

                    <div className="form-actions">
                        <button type="button" className="btn-cancelar" onClick={voltar}>
                            Cancelar
                        </button>
                        <button type="submit" className="btn-salvar">
                            Salvar Alterações
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AlterarInformacoes;
