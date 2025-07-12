
import { useState } from 'react';
import './painel-administrativo.css';

function PainelAdministrativo() {
    const [secaoAtiva, setSecaoAtiva] = useState('pokemons');

    const trocarSecao = (secao) => {
        setSecaoAtiva(secao);
    };

    return (
        <main className="painel-admin">
            {/* Cabeçalho */}
            <header className="cabecalho-admin">
                <div className="container-cabecalho">
                    <div className="logo-admin">
                        <h1><i className="fas fa-shield-alt"></i> PokeShop Admin</h1>
                    </div>
                    <nav className="nav-admin">
                        <a href="/" className="link-voltar">
                            <i className="fas fa-arrow-left"></i>
                            Voltar ao Site
                        </a>
                        <div className="usuario-info">
                            <i className="fas fa-user-circle"></i>
                            <span>Administrador</span>
                        </div>
                    </nav>
                </div>
            </header>

            {/* Menu Lateral */}
            <aside className="menu-lateral">
                <nav className="nav-lateral">
                    <button 
                        className={`item-menu ${secaoAtiva === 'pokemons' ? 'ativo' : ''}`}
                        onClick={() => trocarSecao('pokemons')}
                    >
                        <i className="fas fa-dragon"></i>
                        Pokémons
                    </button>
                    <button 
                        className={`item-menu ${secaoAtiva === 'categorias' ? 'ativo' : ''}`}
                        onClick={() => trocarSecao('categorias')}
                    >
                        <i className="fas fa-tags"></i>
                        Categorias
                    </button>
                    <button 
                        className={`item-menu ${secaoAtiva === 'usuarios' ? 'ativo' : ''}`}
                        onClick={() => trocarSecao('usuarios')}
                    >
                        <i className="fas fa-users"></i>
                        Usuários
                    </button>
                    <button 
                        className={`item-menu ${secaoAtiva === 'pedidos' ? 'ativo' : ''}`}
                        onClick={() => trocarSecao('pedidos')}
                    >
                        <i className="fas fa-shopping-bag"></i>
                        Pedidos
                    </button>
                </nav>
            </aside>

            {/* Conteúdo Principal */}
            <main className="conteudo-admin">
                {/* Seção Pokémons */}
                {secaoAtiva === 'pokemons' && (
                    <div className="secao-conteudo">
                        <div className="cabecalho-secao">
                            <h2>Gerenciar Pokémons</h2>
                            <button className="btn-primario">
                                <i className="fas fa-plus"></i>
                                Cadastrar Pokémon
                            </button>
                        </div>

                        <div className="filtros">
                            <input 
                                type="text" 
                                placeholder="Buscar pokémon..." 
                                className="campo-busca"
                            />
                            <select className="filtro-categoria">
                                <option value="">Todas as categorias</option>
                                <option value="fogo">Fogo</option>
                                <option value="agua">Água</option>
                                <option value="planta">Planta</option>
                            </select>
                        </div>

                        <div className="tabela-container">
                            <table className="tabela">
                                <thead>
                                    <tr>
                                        <th>Imagem</th>
                                        <th>Nome</th>
                                        <th>Número</th>
                                        <th>Tipo</th>
                                        <th>Categoria</th>
                                        <th>Preço</th>
                                        <th>Ações</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className="pokemon-img-mini"></div>
                                        </td>
                                        <td>Pikachu</td>
                                        <td>#025</td>
                                        <td><span className="tipo eletrico">Elétrico</span></td>
                                        <td>Comum</td>
                                        <td>R$ 299,99</td>
                                        <td>
                                            <div className="acoes">
                                                <button className="btn-acao editar">
                                                    <i className="fas fa-edit"></i>
                                                </button>
                                                <button className="btn-acao remover">
                                                    <i className="fas fa-trash"></i>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="pokemon-img-mini"></div>
                                        </td>
                                        <td>Charizard</td>
                                        <td>#006</td>
                                        <td><span className="tipo fogo">Fogo</span></td>
                                        <td>Raro</td>
                                        <td>R$ 599,99</td>
                                        <td>
                                            <div className="acoes">
                                                <button className="btn-acao editar">
                                                    <i className="fas fa-edit"></i>
                                                </button>
                                                <button className="btn-acao remover">
                                                    <i className="fas fa-trash"></i>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {/* Seção Categorias */}
                {secaoAtiva === 'categorias' && (
                    <div className="secao-conteudo">
                        <div className="cabecalho-secao">
                            <h2>Gerenciar Categorias</h2>
                            <button className="btn-primario">
                                <i className="fas fa-plus"></i>
                                Nova Categoria
                            </button>
                        </div>

                        <div className="grid-categorias">
                            <div className="card-categoria">
                                <div className="categoria-header">
                                    <i className="fas fa-fire"></i>
                                    <h3>Comum</h3>
                                </div>
                                <div className="categoria-info">
                                    <p>15 Pokémons</p>
                                    <div className="acoes">
                                        <button className="btn-acao editar">
                                            <i className="fas fa-edit"></i>
                                        </button>
                                        <button className="btn-acao remover">
                                            <i className="fas fa-trash"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="card-categoria">
                                <div className="categoria-header">
                                    <i className="fas fa-gem"></i>
                                    <h3>Raro</h3>
                                </div>
                                <div className="categoria-info">
                                    <p>8 Pokémons</p>
                                    <div className="acoes">
                                        <button className="btn-acao editar">
                                            <i className="fas fa-edit"></i>
                                        </button>
                                        <button className="btn-acao remover">
                                            <i className="fas fa-trash"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="card-categoria">
                                <div className="categoria-header">
                                    <i className="fas fa-crown"></i>
                                    <h3>Lendário</h3>
                                </div>
                                <div className="categoria-info">
                                    <p>3 Pokémons</p>
                                    <div className="acoes">
                                        <button className="btn-acao editar">
                                            <i className="fas fa-edit"></i>
                                        </button>
                                        <button className="btn-acao remover">
                                            <i className="fas fa-trash"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Seção Usuários */}
                {secaoAtiva === 'usuarios' && (
                    <div className="secao-conteudo">
                        <div className="cabecalho-secao">
                            <h2>Usuários Cadastrados</h2>
                        </div>

                        <div className="estatisticas">
                            <div className="card-stat">
                                <div className="stat-icone">
                                    <i className="fas fa-users"></i>
                                </div>
                                <div className="stat-info">
                                    <h3>1,247</h3>
                                    <p>Total de Usuários</p>
                                </div>
                            </div>
                            <div className="card-stat">
                                <div className="stat-icone ativo">
                                    <i className="fas fa-user-check"></i>
                                </div>
                                <div className="stat-info">
                                    <h3>1,189</h3>
                                    <p>Usuários Ativos</p>
                                </div>
                            </div>
                        </div>

                        <div className="filtros">
                            <input 
                                type="text" 
                                placeholder="Buscar usuário..." 
                                className="campo-busca"
                            />
                        </div>

                        <div className="tabela-container">
                            <table className="tabela">
                                <thead>
                                    <tr>
                                        <th>Nome</th>
                                        <th>Email</th>
                                        <th>Telefone</th>
                                        <th>Data Cadastro</th>
                                        <th>Pedidos</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>João Silva</td>
                                        <td>joao@email.com</td>
                                        <td>(11) 99999-9999</td>
                                        <td>15/01/2025</td>
                                        <td>3</td>
                                    </tr>
                                    <tr>
                                        <td>Maria Santos</td>
                                        <td>maria@email.com</td>
                                        <td>(11) 88888-8888</td>
                                        <td>14/01/2025</td>
                                        <td>1</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {/* Seção Pedidos */}
                {secaoAtiva === 'pedidos' && (
                    <div className="secao-conteudo">
                        <div className="cabecalho-secao">
                            <h2>Gerenciar Pedidos</h2>
                        </div>

                        <div className="estatisticas">
                            <div className="card-stat">
                                <div className="stat-icone">
                                    <i className="fas fa-shopping-cart"></i>
                                </div>
                                <div className="stat-info">
                                    <h3>156</h3>
                                    <p>Total de Pedidos</p>
                                </div>
                            </div>
                            <div className="card-stat">
                                <div className="stat-icone pendente">
                                    <i className="fas fa-clock"></i>
                                </div>
                                <div className="stat-info">
                                    <h3>8</h3>
                                    <p>Pendentes</p>
                                </div>
                            </div>
                            <div className="card-stat">
                                <div className="stat-icone ativo">
                                    <i className="fas fa-check-circle"></i>
                                </div>
                                <div className="stat-info">
                                    <h3>142</h3>
                                    <p>Entregues</p>
                                </div>
                            </div>
                        </div>

                        <div className="filtros">
                            <select className="filtro-status">
                                <option value="">Todos os status</option>
                                <option value="pendente">Pendente</option>
                                <option value="processando">Processando</option>
                                <option value="entregue">Entregue</option>
                            </select>
                        </div>

                        <div className="tabela-container">
                            <table className="tabela">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Cliente</th>
                                        <th>Data</th>
                                        <th>Total</th>
                                        <th>Status</th>
                                        <th>Ações</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>#001</td>
                                        <td>João Silva</td>
                                        <td>15/01/2025</td>
                                        <td>R$ 899,98</td>
                                        <td><span className="status entregue">Entregue</span></td>
                                        <td>
                                            <button className="btn-acao visualizar">
                                                <i className="fas fa-eye"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>#002</td>
                                        <td>Maria Santos</td>
                                        <td>14/01/2025</td>
                                        <td>R$ 299,99</td>
                                        <td><span className="status pendente">Pendente</span></td>
                                        <td>
                                            <button className="btn-acao visualizar">
                                                <i className="fas fa-eye"></i>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </main>
        </main>
    );
}

export default PainelAdministrativo;
