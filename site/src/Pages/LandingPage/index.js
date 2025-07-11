import "./index.css";
import Header from '../../Components/Header-Inicial/header-inicial.js';
import HeaderL from '../../Components/Header-Logado/header-logado.js';
import Footer from '../../Components/Footer/footer.js';

function LandingPage() {
    return (
        <main className="landing-page">
            <HeaderL />
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
                    
                    {/* Filtros discretos */}
                    <div className="filtros-discretos" style={{display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap'}}>
                        <select className="filtro-select" defaultValue="all">
                            <option value="all">Todas as Categorias</option>
                            <option value="legendary">Lendários</option>
                            <option value="location">Fundo de Localidade</option>
                            <option value="shiny">Shiny</option>
                            <option value="dynamax">Dynamax</option>
                            <option value="gigantamax">Gigantamax</option>
                            <option value="event">Evento</option>
                        </select>
                        <select className="filtro-select" defaultValue="todos">
                            <option value="todos">Todos os Preços</option>
                            <option value="ate-1000">Até R$ 1.000</option>
                            <option value="1000-2000">R$ 1.000 - R$ 2.000</option>
                            <option value="acima-2000">Acima de R$ 2.000</option>
                        </select>
                        <select className="filtro-select" defaultValue="todos">
                            <option value="todos">Todas as Raridades</option>
                            <option value="comum">Comum</option>
                            <option value="raro">Raro</option>
                            <option value="lendario">Lendário</option>
                        </select>
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
                                <a href="/detalhes-pokemon" className="btn btn-secondary">Ver Detalhes</a>
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
                                <a href="/detalhes-pokemon" className="btn btn-secondary">Ver Detalhes</a>
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
                    </div>
                </div>
            </section>

            {/* <!-- Footer --> */}
            <Footer />
        </main>
    );
}

export default LandingPage;