
import { useEffect } from 'react';
import './painel-administrativo.css';

function PainelAdministrativo() {
    useEffect(() => {
        const links = document.querySelectorAll('.link-barra-lateral');
        const secoes = document.querySelectorAll('.secao-administrativa');

        links.forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                links.forEach(l => l.classList.remove('ativo'));
                secoes.forEach(s => s.classList.remove('ativo'));
                this.classList.add('ativo');
                const targetId = this.getAttribute('href').substring(1);
                document.getElementById(targetId).classList.add('ativo');
            });
        });
    }, []);

    return (
        <main className="pagina-administrativa">
            {/* Cabeçalho */}
            <header className="cabecalho-administrativo">
                <div className="container-cabecalho-administrativo">
                    <div className="logotipo-administrativo">
                        <h1><i className="fas fa-shield-alt"></i> PokeShop Admin</h1>
                    </div>
                    <nav className="navegacao-administrativa">
                        <a href="/" className="link-navegacao-administrativo">
                            <i className="fas fa-arrow-left"></i>
                            Voltar ao Site
                        </a>
                        <div className="usuario-administrativo">
                            <i className="fas fa-user-circle"></i>
                            <span>Admin</span>
                        </div>
                    </nav>
                </div>
            </header>

            {/* Barra Lateral */}
            <aside className="barra-lateral-administrativa">
                <nav className="navegacao-barra-lateral">
                    <a href="#gerenciamento-pokemon" className="link-barra-lateral ativo">
                        <i className="fas fa-dragon"></i>
                        Gerenciar Pokémons
                    </a>
                    <a href="#pedidos" className="link-barra-lateral">
                        <i className="fas fa-shopping-bag"></i>
                        Pedidos
                    </a>
                    <a href="#categorias" className="link-barra-lateral">
                        <i className="fas fa-tags"></i>
                        Categorias
                    </a>
                    <a href="#usuarios" className="link-barra-lateral">
                        <i className="fas fa-users"></i>
                        Usuários
                    </a>
                </nav>
            </aside>

            {/* Conteúdo Principal */}
            <main className="conteudo-principal-administrativo">
                {/* Gerenciamento de Pokémons */}
                <section id="gerenciamento-pokemon" className="secao-administrativa ativo">
                    <div className="cabecalho-secao">
                        <h2>Gerenciamento de Pokémons</h2>
                        <p>Gerencie todos os Pokémons da sua loja</p>
                        <div className="acoes-cabecalho">
                            <button className="botao-primario">
                                <i className="fas fa-plus"></i>
                                Adicionar Pokémon
                            </button>
                        </div>
                    </div>
                    
                    <div className="filtros-administrativos">
                        <div className="grupo-filtro">
                            <input type="text" placeholder="Buscar pokémons..." className="campo-busca" />
                        </div>
                        <div className="grupo-filtro">
                            <select className="selecao-filtro">
                                <option>Todas as categorias</option>
                                <option>Fogo</option>
                                <option>Água</option>
                                <option>Planta</option>
                            </select>
                        </div>
                    </div>

                    <div className="tabela-administrativa-container">
                        <table className="tabela-administrativa">
                            <thead>
                                <tr>
                                    <th>Imagem</th>
                                    <th>Nome</th>
                                    <th>Categoria</th>
                                    <th>Preço</th>
                                    <th>Estoque</th>
                                    <th>Status</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><div className="imagem-pokemon-placeholder"></div></td>
                                    <td>Pikachu</td>
                                    <td><span className="etiqueta categoria-eletrico">Elétrico</span></td>
                                    <td>R$ 299,99</td>
                                    <td>15</td>
                                    <td><span className="etiqueta status-ativo">Ativo</span></td>
                                    <td>
                                        <div className="botoes-acao">
                                            <button className="botao-acao editar">
                                                <i className="fas fa-edit"></i>
                                            </button>
                                            <button className="botao-acao excluir">
                                                <i className="fas fa-trash"></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><div className="imagem-pokemon-placeholder"></div></td>
                                    <td>Charizard</td>
                                    <td><span className="etiqueta categoria-fogo">Fogo</span></td>
                                    <td>R$ 599,99</td>
                                    <td>8</td>
                                    <td><span className="etiqueta status-ativo">Ativo</span></td>
                                    <td>
                                        <div className="botoes-acao">
                                            <button className="botao-acao editar">
                                                <i className="fas fa-edit"></i>
                                            </button>
                                            <button className="botao-acao excluir">
                                                <i className="fas fa-trash"></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Pedidos */}
                <section id="pedidos" className="secao-administrativa">
                    <div className="cabecalho-secao">
                        <h2>Gerenciamento de Pedidos</h2>
                        <p>Acompanhe todos os pedidos realizados</p>
                    </div>
                    
                    <div className="grade-estatisticas">
                        <div className="cartao-estatistica">
                            <div className="icone-estatistica fundo-azul">
                                <i className="fas fa-shopping-cart"></i>
                            </div>
                            <div className="conteudo-estatistica">
                                <h3>156</h3>
                                <p>Total de Pedidos</p>
                            </div>
                        </div>
                        <div className="cartao-estatistica">
                            <div className="icone-estatistica fundo-verde">
                                <i className="fas fa-check-circle"></i>
                            </div>
                            <div className="conteudo-estatistica">
                                <h3>142</h3>
                                <p>Pedidos Entregues</p>
                            </div>
                        </div>
                        <div className="cartao-estatistica">
                            <div className="icone-estatistica fundo-amarelo">
                                <i className="fas fa-clock"></i>
                            </div>
                            <div className="conteudo-estatistica">
                                <h3>8</h3>
                                <p>Pendentes</p>
                            </div>
                        </div>
                    </div>

                    <div className="tabela-administrativa-container">
                        <table className="tabela-administrativa">
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
                                    <td><span className="etiqueta status-entregue">Entregue</span></td>
                                    <td>
                                        <div className="botoes-acao">
                                            <button className="botao-acao visualizar">
                                                <i className="fas fa-eye"></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#002</td>
                                    <td>Maria Santos</td>
                                    <td>14/01/2025</td>
                                    <td>R$ 299,99</td>
                                    <td><span className="etiqueta status-pendente">Pendente</span></td>
                                    <td>
                                        <div className="botoes-acao">
                                            <button className="botao-acao visualizar">
                                                <i className="fas fa-eye"></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Categorias */}
                <section id="categorias" className="secao-administrativa">
                    <div className="cabecalho-secao">
                        <h2>Gerenciamento de Categorias</h2>
                        <p>Organize as categorias dos seus Pokémons</p>
                        <div className="acoes-cabecalho">
                            <button className="botao-primario">
                                <i className="fas fa-plus"></i>
                                Nova Categoria
                            </button>
                        </div>
                    </div>

                    <div className="grade-categorias">
                        <div className="cartao-categoria">
                            <div className="cabecalho-categoria categoria-fogo">
                                <i className="fas fa-fire"></i>
                                <h3>Fogo</h3>
                            </div>
                            <div className="conteudo-categoria">
                                <p><strong>12</strong> Pokémons</p>
                                <div className="botoes-acao">
                                    <button className="botao-acao editar">
                                        <i className="fas fa-edit"></i>
                                    </button>
                                    <button className="botao-acao excluir">
                                        <i className="fas fa-trash"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        <div className="cartao-categoria">
                            <div className="cabecalho-categoria categoria-agua">
                                <i className="fas fa-tint"></i>
                                <h3>Água</h3>
                            </div>
                            <div className="conteudo-categoria">
                                <p><strong>8</strong> Pokémons</p>
                                <div className="botoes-acao">
                                    <button className="botao-acao editar">
                                        <i className="fas fa-edit"></i>
                                    </button>
                                    <button className="botao-acao excluir">
                                        <i className="fas fa-trash"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="cartao-categoria">
                            <div className="cabecalho-categoria categoria-planta">
                                <i className="fas fa-leaf"></i>
                                <h3>Planta</h3>
                            </div>
                            <div className="conteudo-categoria">
                                <p><strong>10</strong> Pokémons</p>
                                <div className="botoes-acao">
                                    <button className="botao-acao editar">
                                        <i className="fas fa-edit"></i>
                                    </button>
                                    <button className="botao-acao excluir">
                                        <i className="fas fa-trash"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Usuários */}
                <section id="usuarios" className="secao-administrativa">
                    <div className="cabecalho-secao">
                        <h2>Gerenciamento de Usuários</h2>
                        <p>Gerencie todos os usuários cadastrados</p>
                    </div>
                    
                    <div className="grade-estatisticas">
                        <div className="cartao-estatistica">
                            <div className="icone-estatistica fundo-roxo">
                                <i className="fas fa-users"></i>
                            </div>
                            <div className="conteudo-estatistica">
                                <h3>2,847</h3>
                                <p>Total de Usuários</p>
                            </div>
                        </div>
                        <div className="cartao-estatistica">
                            <div className="icone-estatistica fundo-verde">
                                <i className="fas fa-user-check"></i>
                            </div>
                            <div className="conteudo-estatistica">
                                <h3>2,634</h3>
                                <p>Usuários Ativos</p>
                            </div>
                        </div>
                        <div className="cartao-estatistica">
                            <div className="icone-estatistica fundo-vermelho">
                                <i className="fas fa-user-times"></i>
                            </div>
                            <div className="conteudo-estatistica">
                                <h3>213</h3>
                                <p>Inativos</p>
                            </div>
                        </div>
                    </div>

                    <div className="filtros-administrativos">
                        <div className="grupo-filtro">
                            <input type="text" placeholder="Buscar usuários..." className="campo-busca" />
                        </div>
                        <div className="grupo-filtro">
                            <select className="selecao-filtro">
                                <option>Todos os status</option>
                                <option>Ativo</option>
                                <option>Inativo</option>
                            </select>
                        </div>
                    </div>

                    <div className="tabela-administrativa-container">
                        <table className="tabela-administrativa">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nome</th>
                                    <th>Email</th>
                                    <th>Data Cadastro</th>
                                    <th>Status</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>#001</td>
                                    <td>João Silva</td>
                                    <td>joao@email.com</td>
                                    <td>10/01/2025</td>
                                    <td><span className="etiqueta status-ativo">Ativo</span></td>
                                    <td>
                                        <div className="botoes-acao">
                                            <button className="botao-acao visualizar">
                                                <i className="fas fa-eye"></i>
                                            </button>
                                            <button className="botao-acao editar">
                                                <i className="fas fa-edit"></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#002</td>
                                    <td>Maria Santos</td>
                                    <td>maria@email.com</td>
                                    <td>08/01/2025</td>
                                    <td><span className="etiqueta status-ativo">Ativo</span></td>
                                    <td>
                                        <div className="botoes-acao">
                                            <button className="botao-acao visualizar">
                                                <i className="fas fa-eye"></i>
                                            </button>
                                            <button className="botao-acao editar">
                                                <i className="fas fa-edit"></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>
        </main>
    );
}

export default PainelAdministrativo;
