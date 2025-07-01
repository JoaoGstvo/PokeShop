import { useEffect } from 'react';

import './index.css';

function AdminPanel() {
    useEffect(() => {
        const links = document.querySelectorAll('.sidebar-link');
        const sections = document.querySelectorAll('.admin-section');

        links.forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                links.forEach(l => l.classList.remove('active'));
                sections.forEach(s => s.classList.remove('active'));
                this.classList.add('active');
                const targetId = this.getAttribute('href').substring(1);
                document.getElementById(targetId).classList.add('active');
            });
        });
    }, []);

    return (
        <main className="admin-page">
            {/* Cabeçalho */}
            <header className="admin-header">
                <div className="container">
                    <div className="admin-logo">
                        <h1><i className="fas fa-shield-alt"></i> PokeShop Admin</h1>
                    </div>
                    <nav className="admin-nav">
                        <a href="/" className="nav-link">
                            <i className="fas fa-arrow-left"></i>
                            Voltar ao Site
                        </a>
                        <div className="admin-user">
                            <i className="fas fa-user-circle"></i>
                            <span>Admin</span>
                        </div>
                    </nav>
                </div>
            </header>

            {/* Sidebar */}
            <aside className="admin-sidebar">
                <nav className="sidebar-nav">
                    <a href="#dashboard" className="sidebar-link active">
                        <i className="fas fa-tachometer-alt"></i>
                        Dashboard
                    </a>
                    <a href="#pokemon-management" className="sidebar-link">
                        <i className="fas fa-dragon"></i>
                        Gerenciar Pokemons
                    </a>
                    <a href="#orders" className="sidebar-link">
                        <i className="fas fa-shopping-bag"></i>
                        Pedidos
                    </a>
                    <a href="#categories" className="sidebar-link">
                        <i className="fas fa-tags"></i>
                        Categorias
                    </a>
                    <a href="#users" className="sidebar-link">
                        <i className="fas fa-users"></i>
                        Usuários
                    </a>
                    <a href="#settings" className="sidebar-link">
                        <i className="fas fa-cog"></i>
                        Configurações
                    </a>
                </nav>
            </aside>

            {/* Conteúdo principal */}
            <main className="admin-main">
                {/* Dashboard */}
                <section id="dashboard" className="admin-section active">
                    <div className="section-header">
                        <h2>Dashboard</h2>
                        <p>Visão geral da sua loja</p>
                    </div>
                    {/* ...restante do conteúdo antigo... */}
                </section>
                {/* ...outras seções... */}
            </main>
        </main>
    );
}


export default AdminPanel;