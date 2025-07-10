import React from "react";
import "./login.css";

function LoginAdministrativo() {
    return (
        <main className="admin-login-page">
            <div className="admin-login-container">
                <div className="admin-login-header">
                    <h2>
                        <i className="fas fa-shield-alt"></i>
                        Área Administrativa
                    </h2>
                    <div className="admin-badge">
                        <i className="fas fa-lock"></i>
                        Admin Only
                    </div>
                </div>
                
                <form className="admin-login-form">
                    <div className="admin-form-group">
                        <label htmlFor="email-administrativo">
                            <i className="fas fa-user-shield"></i>
                            Email Administrativo
                        </label>
                        <input 
                            type="email" 
                            id="email-administrativo" 
                            placeholder="Digite seu email de administrador"
                            className="admin-form-input"
                        />
                    </div>
                    
                    <div className="admin-form-group">
                        <label htmlFor="senha-administrativa">
                            <i className="fas fa-key"></i>
                            Senha Administrativa
                        </label>
                        <input 
                            type="password" 
                            id="senha-administrativa" 
                            placeholder="Digite sua senha de administrador"
                            className="admin-form-input"
                        />
                    </div>
                    
                    <button type="submit" className="admin-login-btn">
                        <i className="fas fa-sign-in-alt"></i>
                        Acessar Painel Admin
                    </button>
                </form>
                
                <div className="admin-security-notice">
                    <p>
                        <i className="fas fa-exclamation-triangle"></i>
                        Esta área é monitorada. Todos os acessos são registrados.
                    </p>
                </div>
                
                <div className="admin-redirect">
                    <p>Não é um administrador?</p>
                    <a href="/" className="admin-back-link">
                        <i className="fas fa-arrow-left"></i>
                        Voltar ao Site Principal
                    </a>
                </div>
            </div>
        </main>
    );
}

export default LoginAdministrativo;
