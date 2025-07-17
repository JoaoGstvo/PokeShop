import './index.css';

function CardPokemon() {
    return (
        <main className="main-card-pokemon">
            <div className="pokemon-card">
                <div className="card-header">
                    <span className="categoria-card-pokemon">Fundo de Localidade</span>
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
        </main>
    )
}

export default CardPokemon();