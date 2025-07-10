
import React from "react";
import "./login-administrativo.css";

function LoginAdministrativo() {
    return (
        <main className="pagina-login-administrativo">
            <div className="container-login-administrativo">
                <div className="cabecalho-login-administrativo">
                    <h2>
                        <i className="fas fa-shield-alt"></i>
                        Área Administrativa
                    </h2>
                    <div className="distintivo-administrativo">
                        <i className="fas fa-lock"></i>
                        Admin Only
                    </div>
                </div>
                
                <form className="formulario-login-administrativo">
                    <div className="grupo-formulario-administrativo">
                        <label htmlFor="email-administrativo">
                            <i className="fas fa-user-shield"></i>
                            Email Administrativo
                        </label>
                        <input 
                            type="email" 
                            id="email-administrativo" 
                            placeholder="Digite seu email de administrador"
                            className="campo-formulario-administrativo"
                        />
                    </div>
                    
                    <div className="grupo-formulario-administrativo">
                        <label htmlFor="senha-administrativa">
                            <i className="fas fa-key"></i>
                            Senha Administrativa
                        </label>
                        <input 
                            type="password" 
                            id="senha-administrativa" 
                            placeholder="Digite sua senha de administrador"
                            className="campo-formulario-administrativo"
                        />
                    </div>
                    
                    <button type="submit" className="botao-login-administrativo">
                        <i className="fas fa-sign-in-alt"></i>
                        Acessar Painel Admin
                    </button>
                </form>
                
                <div className="aviso-seguranca-administrativo">
                    <p>
                        <i className="fas fa-exclamation-triangle"></i>
                        Esta área é monitorada. Todos os acessos são registrados.
                    </p>
                </div>
                
                <div className="redirecionamento-administrativo">
                    <p>Não é um administrador?</p>
                    <a href="/" className="link-retorno-administrativo">
                        <i className="fas fa-arrow-left"></i>
                        Voltar ao Site Principal
                    </a>
                </div>
            </div>
        </main>
    );
}

export default LoginAdministrativo;
