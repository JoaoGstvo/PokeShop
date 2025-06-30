import "./index.css";
import Header from '../../Components/Header/header.js';
import Footer from '../../Components/Footer/footer.js';

function LandingPage() {
    return (
        <main className="landing-page">
            <Header />
            {/* <!-- Hero Section --> */}
            <section id="home" className="hero">
                <div className="container">
                    <div className="hero-content">
                        <h2>Capture os Melhores Pokemons!</h2>
                        <p>Descubra nossa coleção exclusiva de Pokemons raros e lendários</p>
                        <a href="#products" className="btn btn-primary">Ver Pokemons</a>
                    </div>
                </div>
            </section>

            {/* <!-- Filters Section --> */}
            <section id="products" className="products-section">
                <div className="container">
                    <h2 className="section-title">Nossos Pokemons</h2>
                    
                    {/* <!-- Category Filters --> */}
                    <div className="filters">
                        <h3>Categorias</h3>
                        <div className="filter-group">
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

                    {/* <!-- Pokemon Grid --> */}
                    <div className="pokemon-grid">
                        {/* <!-- Legendary Pokemon --> */}
                        <div className="pokemon-card legendary" data-category="legendary">
                            <div className="card-header">
                                <span className="category-badge legendary-badge">Lendário</span>
                                <span className="price">R$ 2.500,00</span>
                            </div>
                            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png" alt="Mewtwo" className="pokemon-image"/>
                            <div className="card-content">
                                <h3>Mewtwo</h3>
                                <p className="pokemon-type">Tipo: Psíquico</p>
                                <p className="pokemon-description">Pokemon Genético extremamente raro e poderoso.</p>
                                <a href="/pokemonDetail" className="btn btn-secondary">Ver Detalhes</a>
                            </div>
                        </div>

                        <div className="pokemon-card legendary" data-category="legendary">
                            <div className="card-header">
                                <span className="category-badge legendary-badge">Lendário</span>
                                <span className="price">R$ 3.000,00</span>
                            </div>
                            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/144.png" alt="Articuno" className="pokemon-image"/>
                            <div className="card-content">
                                <h3>Articuno</h3>
                                <p className="pokemon-type">Tipo: Gelo/Voador</p>
                                <p className="pokemon-description">Ave lendária que controla o gelo.</p>
                                <a href="/pokemonDetail" className="btn btn-secondary">Ver Detalhes</a>
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
                                <a href="/pokemonDetail" className="btn btn-secondary">Ver Detalhes</a>
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
                                <a href="/pokemonDetail" className="btn btn-secondary">Ver Detalhes</a>
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
                                <a href="/pokemonDetail" className="btn btn-secondary">Ver Detalhes</a>
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
                                <a href="/pokemonDetail" className="btn btn-secondary">Ver Detalhes</a>
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
                                <a href="/pokemonDetail" className="btn btn-secondary">Ver Detalhes</a>
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
                                <a href="/pokemonDetail" className="btn btn-secondary">Ver Detalhes</a>
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
                                <a href="/pokemonDetail" className="btn btn-secondary">Ver Detalhes</a>
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
                                <a href="/pokemonDetail" className="btn btn-secondary">Ver Detalhes</a>
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
                                <a href="/pokemonDetail" className="btn btn-secondary">Ver Detalhes</a>
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
                                <a href="/pokemonDetail" className="btn btn-secondary">Ver Detalhes</a>
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
                                <a href="/pokemonDetail" className="btn btn-secondary">Ver Detalhes</a>
                            </div>
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