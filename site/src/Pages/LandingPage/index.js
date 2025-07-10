import "./index.css";
import Header from '../../Components/Header-Inicial/header-inicial.js';
import Footer from '../../Components/Footer/footer.js';
import React, { useState, useEffect } from 'react';

function LandingPage() {
    const [pokemonsFavoritos, setPokemonsFavoritos] = useState([]);
    const [filtroPreco, setFiltroPreco] = useState('todos');
    const [filtroRaridade, setFiltroRaridade] = useState('todos');
    const [ordenacao, setOrdenacao] = useState('nome');
    const [paginaAtual, setPaginaAtual] = useState(1);
    const [pokemonsPorPagina] = useState(6);

    const toggleFavorito = (pokemonId) => {
        setPokemonsFavoritos(prev => 
            prev.includes(pokemonId) 
                ? prev.filter(id => id !== pokemonId)
                : [...prev, pokemonId]
        );
    };

    const handleFiltroPreco = (faixa) => {
        setFiltroPreco(faixa);
        setPaginaAtual(1);
    };

    const handleFiltroRaridade = (raridade) => {
        setFiltroRaridade(raridade);
        setPaginaAtual(1);
    };

    const handleOrdenacao = (tipo) => {
        setOrdenacao(tipo);
        setPaginaAtual(1);
    };
    return (
        <main className="landing-page">
            <Header />
            {/* <!-- Hero Section --> */}
            <section id="home" className="hero">
                <div className="container">
                    <div className="hero-content">
                        <h2>Capture os Melhores Pokémons!</h2>
                        <p>Descubra nossa coleção exclusiva de Pokémons raros e lendários</p>
                        <a href="#products" className="btn btn-primary">Ver Pokémons</a>
                    </div>
                </div>
            </section>

            {/* <!-- Filters Section --> */}
            <section id="products" className="products-section">
                <div className="container">
                    <h2 className="section-title">Nossos Pokémons</h2>
                    
                    {/* <!-- Filtros Avançados --> */}
                    <div className="filtros-avancados">
                        <div className="secao-filtros">
                            <h3>Filtros</h3>
                            <div className="container-filtros">
                                {/* Filtro por Categoria */}
                                <div className="grupo-filtro">
                                    <h4>Categorias</h4>
                                    <div className="opcoes-filtro">
                                        <input type="radio" id="all" name="category" value="all" defaultChecked />
                                        <label htmlFor="all" className="filter-btn">Todos</label>
                                        
                                        <input type="radio" id="legendary" name="category" value="legendary" />
                                        <label htmlFor="legendary" className="filter-btn">Lendários</label>
                                        
                                        <input type="radio" id="location" name="category" value="location" />
                                        <label htmlFor="location" className="filter-btn">Fundo de Localidade</label>
                                        
                                        <input type="radio" id="shiny" name="category" value="shiny" />
                                        <label htmlFor="shiny" className="filter-btn">Shiny</label>
                                        
                                        <input type="radio" id="dynamax" name="category" value="dynamax" />
                                        <label htmlFor="dynamax" className="filter-btn">Dynamax</label>
                                        
                                        <input type="radio" id="gigantamax" name="category" value="gigantamax" />
                                        <label htmlFor="gigantamax" className="filter-btn">Gigantamax</label>
                                        
                                        <input type="radio" id="event" name="category" value="event" />
                                        <label htmlFor="event" className="filter-btn">Evento</label>
                                    </div>
                                </div>

                                {/* Filtro por Preço */}
                                <div className="grupo-filtro">
                                    <h4>Faixa de Preço</h4>
                                    <div className="opcoes-filtro">
                                        <button 
                                            className={`filtro-preco ${filtroPreco === 'todos' ? 'ativo' : ''}`}
                                            onClick={() => handleFiltroPreco('todos')}
                                        >
                                            Todos os Preços
                                        </button>
                                        <button 
                                            className={`filtro-preco ${filtroPreco === 'ate-1000' ? 'ativo' : ''}`}
                                            onClick={() => handleFiltroPreco('ate-1000')}
                                        >
                                            Até R$ 1.000
                                        </button>
                                        <button 
                                            className={`filtro-preco ${filtroPreco === '1000-2000' ? 'ativo' : ''}`}
                                            onClick={() => handleFiltroPreco('1000-2000')}
                                        >
                                            R$ 1.000 - R$ 2.000
                                        </button>
                                        <button 
                                            className={`filtro-preco ${filtroPreco === 'acima-2000' ? 'ativo' : ''}`}
                                            onClick={() => handleFiltroPreco('acima-2000')}
                                        >
                                            Acima de R$ 2.000
                                        </button>
                                    </div>
                                </div>

                                {/* Filtro por Raridade */}
                                <div className="grupo-filtro">
                                    <h4>Raridade</h4>
                                    <div className="opcoes-filtro">
                                        <button 
                                            className={`filtro-raridade ${filtroRaridade === 'todos' ? 'ativo' : ''}`}
                                            onClick={() => handleFiltroRaridade('todos')}
                                        >
                                            Todas as Raridades
                                        </button>
                                        <button 
                                            className={`filtro-raridade ${filtroRaridade === 'comum' ? 'ativo' : ''}`}
                                            onClick={() => handleFiltroRaridade('comum')}
                                        >
                                            Comum
                                        </button>
                                        <button 
                                            className={`filtro-raridade ${filtroRaridade === 'raro' ? 'ativo' : ''}`}
                                            onClick={() => handleFiltroRaridade('raro')}
                                        >
                                            Raro
                                        </button>
                                        <button 
                                            className={`filtro-raridade ${filtroRaridade === 'lendario' ? 'ativo' : ''}`}
                                            onClick={() => handleFiltroRaridade('lendario')}
                                        >
                                            Lendário
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Ordenação */}
                        <div className="secao-ordenacao">
                            <h3>Ordenar por</h3>
                            <div className="opcoes-ordenacao">
                                <button 
                                    className={`botao-ordenacao ${ordenacao === 'nome' ? 'ativo' : ''}`}
                                    onClick={() => handleOrdenacao('nome')}
                                >
                                    <i className="fas fa-sort-alpha-down"></i>
                                    Nome
                                </button>
                                <button 
                                    className={`botao-ordenacao ${ordenacao === 'preco-crescente' ? 'ativo' : ''}`}
                                    onClick={() => handleOrdenacao('preco-crescente')}
                                >
                                    <i className="fas fa-sort-amount-down"></i>
                                    Menor Preço
                                </button>
                                <button 
                                    className={`botao-ordenacao ${ordenacao === 'preco-decrescente' ? 'ativo' : ''}`}
                                    onClick={() => handleOrdenacao('preco-decrescente')}
                                >
                                    <i className="fas fa-sort-amount-up"></i>
                                    Maior Preço
                                </button>
                                <button 
                                    className={`botao-ordenacao ${ordenacao === 'popularidade' ? 'ativo' : ''}`}
                                    onClick={() => handleOrdenacao('popularidade')}
                                >
                                    <i className="fas fa-star"></i>
                                    Popularidade
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Pokemon Grid --> */}
                    <div className="pokemon-grid">
                        {/* <!-- Legendary Pokemon --> */}
                        <div className="pokemon-card legendary" data-category="legendary">
                            <div className="card-header">
                                <span className="category-badge legendary-badge">Lendário</span>
                                <span className="price">R$ 2.500,00</span>
                            </div>
                            <button 
                                className={`botao-favorito ${pokemonsFavoritos.includes('mewtwo') ? 'favorito' : ''}`}
                                onClick={() => toggleFavorito('mewtwo')}
                            >
                                <i className={`${pokemonsFavoritos.includes('mewtwo') ? 'fas' : 'far'} fa-heart`}></i>
                            </button>
                            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png" alt="Mewtwo" className="pokemon-image"/>
                            <div className="card-content">
                                <h3>Mewtwo</h3>
                                <p className="pokemon-type">Tipo: Psíquico</p>
                                <p className="pokemon-description">Pokemon Genético extremamente raro e poderoso.</p>
                                <div className="acoes-card">
                                    <a href="/detalhes-pokemon" className="btn btn-secondary">Ver Detalhes</a>
                                    <button className="btn btn-primary">Adicionar ao Carrinho</button>
                                </div>
                            </div>
                        </div>

                        <div className="pokemon-card legendary" data-category="legendary">
                            <div className="card-header">
                                <span className="category-badge legendary-badge">Lendário</span>
                                <span className="price">R$ 3.000,00</span>
                            </div>
                            <button 
                                className={`botao-favorito ${pokemonsFavoritos.includes('articuno') ? 'favorito' : ''}`}
                                onClick={() => toggleFavorito('articuno')}
                            >
                                <i className={`${pokemonsFavoritos.includes('articuno') ? 'fas' : 'far'} fa-heart`}></i>
                            </button>
                            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/144.png" alt="Articuno" className="pokemon-image"/>
                            <div className="card-content">
                                <h3>Articuno</h3>
                                <p className="pokemon-type">Tipo: Gelo/Voador</p>
                                <p className="pokemon-description">Ave lendária que controla o gelo.</p>
                                <div className="acoes-card">
                                    <a href="/detalhes-pokemon" className="btn btn-secondary">Ver Detalhes</a>
                                    <button className="btn btn-primary">Adicionar ao Carrinho</button>
                                </div>
                            </div>
                        </div>

                        <div className="pokemon-card legendary" data-category="legendary">
                            <div className="card-header">
                                <span className="category-badge legendary-badge">Lendário</span>
                                <span className="price">R$ 3.200,00</span>
                            </div>
                            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/145.png" alt="Zapdos" className="pokemon-image"/>
                            <div className="card-content">
                                <h3>Zapdos</h3>
                                <p className="pokemon-type">Tipo: Elétrico/Voador</p>
                                <p className="pokemon-description">Ave lendária que controla os raios.</p>
                                <a href="/detalhes-pokemon" className="btn btn-secondary">Ver Detalhes</a>
                            </div>
                        </div>

                        {/* <!-- Location Background Pokemon --> */}
                        <div className="pokemon-card location" data-category="location">
                            <div className="card-header">
                                <span className="category-badge location-badge">Fundo de Localidade</span>
                                <span className="price">R$ 800,00</span>
                            </div>
                            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" alt="Pikachu" className="pokemon-image"/>
                            <div className="card-content">
                                <h3>Pikachu</h3>
                                <p className="pokemon-type">Tipo: Elétrico</p>
                                <p className="pokemon-description">Capturado na Floresta de Viridian.</p>
                                <a href="/detalhes-pokemon" className="btn btn-secondary">Ver Detalhes</a>
                            </div>
                        </div>

                        <div className="pokemon-card location" data-category="location">
                            <div className="card-header">
                                <span className="category-badge location-badge">Fundo de Localidade</span>
                                <span className="price">R$ 650,00</span>
                            </div>
                            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="Bulbasaur" className="pokemon-image"/>
                            <div className="card-content">
                                <h3>Bulbasaur</h3>
                                <p className="pokemon-type">Tipo: Grama/Venenoso</p>
                                <p className="pokemon-description">Encontrado no Laboratório do Professor Carvalho.</p>
                                <a href="/detalhes-pokemon" className="btn btn-secondary">Ver Detalhes</a>
                            </div>
                        </div>

                        {/* <!-- Shiny Pokemon --> */}
                        <div className="pokemon-card shiny" data-category="shiny">
                            <div className="card-header">
                                <span className="category-badge shiny-badge">Shiny ✨</span>
                                <span className="price">R$ 1.800,00</span>
                            </div>
                            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png" alt="Charizard Shiny" className="pokemon-image shiny-effect"/>
                            <div className="card-content">
                                <h3>Charizard Shiny</h3>
                                <p className="pokemon-type">Tipo: Fogo/Voador</p>
                                <p className="pokemon-description">Versão extremamente rara com coloração especial.</p>
                                <a href="/detalhes-pokemon" className="btn btn-secondary">Ver Detalhes</a>
                            </div>
                        </div>

                        <div className="pokemon-card shiny" data-category="shiny">
                            <div className="card-header">
                                <span className="category-badge shiny-badge">Shiny ✨</span>
                                <span className="price">R$ 1.200,00</span>
                            </div>
                            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png" alt="Gengar Shiny" className="pokemon-image shiny-effect"/>
                            <div className="card-content">
                                <h3>Gengar Shiny</h3>
                                <p className="pokemon-type">Tipo: Fantasma/Venenoso</p>
                                <p className="pokemon-description">Pokemon Fantasma com aparência única.</p>
                                <a href="/detalhes-pokemon" className="btn btn-secondary">Ver Detalhes</a>
                            </div>
                        </div>

                        {/* <!-- Dynamax Pokemon --> */}
                        <div className="pokemon-card dynamax" data-category="dynamax">
                            <div className="card-header">
                                <span className="category-badge dynamax-badge">Dynamax</span>
                                <span className="price">R$ 1.500,00</span>
                            </div>
                            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/448.png" alt="Lucario Dynamax" className="pokemon-image dynamax-effect"/>
                            <div className="card-content">
                                <h3>Lucario Dynamax</h3>
                                <p className="pokemon-type">Tipo: Lutador/Aço</p>
                                <p className="pokemon-description">Pokemon com poder Dynamax ativado.</p>
                                <a href="/detalhes-pokemon" className="btn btn-secondary">Ver Detalhes</a>
                            </div>
                        </div>

                        <div className="pokemon-card dynamax" data-category="dynamax">
                            <div className="card-header">
                                <span className="category-badge dynamax-badge">Dynamax</span>
                                <span className="price">R$ 1.100,00</span>
                            </div>
                            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/131.png" alt="Lapras Dynamax" className="pokemon-image dynamax-effect"/>
                            <div className="card-content">
                                <h3>Lapras Dynamax</h3>
                                <p className="pokemon-type">Tipo: Água/Gelo</p>
                                <p className="pokemon-description">Pokemon gentil com tamanho aumentado.</p>
                                <a href="/detalhes-pokemon" className="btn btn-secondary">Ver Detalhes</a>
                            </div>
                        </div>

                        {/* <!-- Gigantamax Pokemon --> */}
                        <div className="pokemon-card gigantamax" data-category="gigantamax">
                            <div className="card-header">
                                <span className="category-badge gigantamax-badge">Gigantamax</span>
                                <span className="price">R$ 2.200,00</span>
                            </div>
                            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" alt="Pikachu Gigantamax" className="pokemon-image gigantamax-effect"/>
                            <div className="card-content">
                                <h3>Pikachu Gigantamax</h3>
                                <p className="pokemon-type">Tipo: Elétrico</p>
                                <p className="pokemon-description">Pikachu com forma Gigantamax única.</p>
                                <a href="/detalhes-pokemon" className="btn btn-secondary">Ver Detalhes</a>
                            </div>
                        </div>

                        <div className="pokemon-card gigantamax" data-category="gigantamax">
                            <div className="card-header">
                                <span className="category-badge gigantamax-badge">Gigantamax</span>
                                <span className="price">R$ 2.000,00</span>
                            </div>
                            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png" alt="Charizard Gigantamax" className="pokemon-image gigantamax-effect"/>
                            <div className="card-content">
                                <h3>Charizard Gigantamax</h3>
                                <p className="pokemon-type">Tipo: Fogo/Voador</p>
                                <p className="pokemon-description">Charizard com forma Gigantamax especial.</p>
                                <a href="/detalhes-pokemon" className="btn btn-secondary">Ver Detalhes</a>
                            </div>
                        </div>

                        {/* <!-- Event Pokemon --> */}
                        <div className="pokemon-card event" data-category="event">
                            <div className="card-header">
                                <span className="category-badge event-badge">Evento</span>
                                <span className="price">R$ 3.500,00</span>
                            </div>
                            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png" alt="Mew Evento" className="pokemon-image event-effect"/>
                            <div className="card-content">
                                <h3>Mew do Evento</h3>
                                <p className="pokemon-type">Tipo: Psíquico</p>
                                <p className="pokemon-description">Mew exclusivo de evento especial.</p>
                                <a href="/detalhes-pokemon" className="btn btn-secondary">Ver Detalhes</a>
                            </div>
                        </div>

                        <div className="pokemon-card event" data-category="event">
                            <div className="card-header">
                                <span className="category-badge event-badge">Evento</span>
                                <span className="price">R$ 2.800,00</span>
                            </div>
                            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/249.png" alt="Lugia Evento" className="pokemon-image event-effect"/>
                            <div className="card-content">
                                <h3>Lugia do Evento</h3>
                                <p className="pokemon-type">Tipo: Psíquico/Voador</p>
                                <p className="pokemon-description">Lugia distribuído em evento limitado.</p>
                                <a href="/detalhes-pokemon" className="btn btn-secondary">Ver Detalhes</a>
                            </div>
                        </div>

                    {/* <!-- Paginação --> */}
                    <div className="paginacao">
                        <div className="controles-paginacao">
                            <button 
                                className="botao-paginacao anterior"
                                onClick={() => setPaginaAtual(Math.max(1, paginaAtual - 1))}
                                disabled={paginaAtual === 1}
                            >
                                <i className="fas fa-chevron-left"></i>
                                Anterior
                            </button>
                            
                            <div className="numeros-pagina">
                                {[1, 2, 3, 4, 5].map(numero => (
                                    <button
                                        key={numero}
                                        className={`numero-pagina ${paginaAtual === numero ? 'ativo' : ''}`}
                                        onClick={() => setPaginaAtual(numero)}
                                    >
                                        {numero}
                                    </button>
                                ))}
                            </div>
                            
                            <button 
                                className="botao-paginacao proximo"
                                onClick={() => setPaginaAtual(Math.min(5, paginaAtual + 1))}
                                disabled={paginaAtual === 5}
                            >
                                Próximo
                                <i className="fas fa-chevron-right"></i>
                            </button>
                        </div>
                        <div className="info-paginacao">
                            <p>Mostrando {(paginaAtual - 1) * pokemonsPorPagina + 1} - {Math.min(paginaAtual * pokemonsPorPagina, 30)} de 30 Pokémons</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Footer --> */}
            <Footer />
        </main>
    );
}

export default LandingPage;