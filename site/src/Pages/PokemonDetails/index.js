import "./index.css";
import HeaderL from '../../Components/Header-Logado/header-logado.js';
import Footer from '../../Components/Footer/footer.js';


function PokemonDetail() {
    return (
        <main className="pokemon-detail">
            <HeaderL />
            {/* Breadcrumb */}
            <section className="breadcrumb">
                <div className="container-nav-detail">
                    <nav className="breadcrumb-nav">
                        <a href="/">Início</a>
                        <span>/</span>
                        <a href="/#products">Pokemons</a>
                        <span>/</span>
                        <span className="current">Detalhes</span>
                    </nav>
                </div>
            </section>

            {/* Pokemon Detail Section */}
            <section className="pokemon-detail">
                <div className="container">
                    <div className="detail-grid">
                        {/* Pokemon Image Gallery - agora imagem fixa */}
                        <div className="image-section">
                            <div className="main-image">
                                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" alt="Pikachu" id="main-pokemon-image" />
                                <div className="image-badges">
                                    <span className="category-badge shiny-badge">Shiny ✨</span>
                                </div>
                            </div>
                        </div>

                        {/* Pokemon Information */}
                        <div className="info-section">
                            <div className="pokemon-header">
                                <h1 className="pokemon-name">Pikachu</h1>
                                <div className="pokemon-number">#025</div>
                            </div>

                            <div className="price-section">
                                <span className="current-price">R$ 1.800,00</span>
                            </div>

                            <div className="pokemon-types">
                                <span className="type electric">Elétrico</span>
                            </div>

                            <div className="pokemon-description">
                                <h3>Descrição</h3>
                                <p>Este Pikachu especial possui uma coloração única que o torna extremamente raro. Sua pelagem dourada brilha sob a luz, e suas bochechas vermelhas emitem faíscas mais intensas que as de um Pikachu comum. Capturado durante um evento especial na Floresta de Viridian, este Pokemon é uma verdadeira joia para qualquer colecionador.</p>
                            </div>

                            <div className="purchase-section">
                                <div className="quantity-selector">
                                    <label htmlFor="quantity">Quantidade:</label>
                                    <select id="quantity">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </div>
                                <button className="btn btn-primary btn-large">
                                    <i className="fas fa-shopping-cart"></i>
                                    Adicionar ao Carrinho
                                </button>
                                <button className="btn btn-secondary btn-large">
                                    <i className="fas fa-bolt"></i>
                                    Comprar Agora
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Additional Info Tabs */}
                    <div className="additional-info">
                        <div className="tabs">
                            {/* Tabs logic can be implemented with React state if needed */}
                            <input type="radio" id="tab1" name="tabs" defaultChecked />
                            <input type="radio" id="tab2" name="tabs" />
                            <input type="radio" id="tab3" name="tabs" />

                            <div className="tab-labels">
                                <label htmlFor="tab1" className="tab-label">Informações Detalhadas</label>
                            </div>

                            <div className="tab-content">
                                <div className="tab-panel">
                                    <h3>Informações Detalhadas</h3>
                                    <div className="detail-table">
                                        <div className="detail-row">
                                            <span className="detail-label">Altura:</span>
                                            <span className="detail-value">0.4 m</span>
                                        </div>
                                        <div className="detail-row">
                                            <span className="detail-label">Peso:</span>
                                            <span className="detail-value">6.0 kg</span>
                                        </div>
                                        <div className="detail-row">
                                            <span className="detail-label">Categoria:</span>
                                            <span className="detail-value">Shiny</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-panel">
                                    <h3>Histórico do Pokemon</h3>
                                    <div className="history-timeline">
                                        <div className="timeline-item">
                                            <div className="timeline-date">2025-01-15</div>
                                            <div className="timeline-content">
                                                <h4>Capturado</h4>
                                                <p>Encontrado na Floresta de Viridian durante uma tempestade elétrica.</p>
                                            </div>
                                        </div>
                                        <div className="timeline-item">
                                            <div className="timeline-date">2025-02-10</div>
                                            <div className="timeline-content">
                                                <h4>Treinamento</h4>
                                                <p>Participou de treinamento intensivo no Centro Pokemon de Cerulean City.</p>
                                            </div>
                                        </div>
                                        <div className="timeline-item">
                                            <div className="timeline-date">2025-06-30</div>
                                            <div className="timeline-content">
                                                <h4>Disponível para Venda</h4>
                                                <p>Adicionado ao catálogo da PokeShop após certificação completa.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </main>
    );
}

export default PokemonDetail;