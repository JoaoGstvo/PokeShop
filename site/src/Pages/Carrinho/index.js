
import "./index.css";
import Header from '../../Components/Header/header.js';
import Footer from '../../Components/Footer/footer.js';

function Carrinho() {
    // Dados de exemplo do carrinho
    const cartItems = [
        {
            id: 1,
            name: "Mewtwo",
            type: "Psíquico",
            category: "Lendário",
            price: 2500.00,
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png",
            quantity: 1
        },
        {
            id: 2,
            name: "Charizard Shiny",
            type: "Fogo/Voador",
            category: "Shiny",
            price: 1800.00,
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
            quantity: 2
        }
    ];

    const calculateSubtotal = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    const calculateTotal = () => {
        const subtotal = calculateSubtotal();
        const shipping = 50.00;
        return subtotal + shipping;
    };

    return (
        <main className="cart-page">
            <Header />
            
            <section className="cart-section">
                <div className="container">
                    <div className="cart-header">
                        <h1><i className="fas fa-shopping-cart"></i> Meu Carrinho</h1>
                        <p>Revise seus Pokémons antes de finalizar a compra</p>
                    </div>

                    <div className="cart-content">
                        <div className="cart-items">
                            <h2>Itens no Carrinho</h2>
                            
                            {cartItems.length === 0 ? (
                                <div className="empty-cart">
                                    <i className="fas fa-shopping-cart"></i>
                                    <h3>Seu carrinho está vazio</h3>
                                    <p>Adicione alguns Pokémons incríveis à sua coleção!</p>
                                    <a href="/" className="btn btn-primary">Explorar Pokémons</a>
                                </div>
                            ) : (
                                <div className="cart-list">
                                    {cartItems.map(item => (
                                        <div key={item.id} className="cart-item">
                                            <div className="item-image">
                                                <img src={item.image} alt={item.name} />
                                            </div>
                                            <div className="item-details">
                                                <h3>{item.name}</h3>
                                                <p className="item-type">Tipo: {item.type}</p>
                                                <span className={`category-badge ${item.category.toLowerCase()}-badge`}>
                                                    {item.category}
                                                </span>
                                            </div>
                                            <div className="item-quantity">
                                                <label>Quantidade:</label>
                                                <div className="quantity-controls">
                                                    <button className="quantity-btn">-</button>
                                                    <span className="quantity">{item.quantity}</span>
                                                    <button className="quantity-btn">+</button>
                                                </div>
                                            </div>
                                            <div className="item-price">
                                                <span className="price">R$ {item.price.toFixed(2)}</span>
                                                <span className="total-price">R$ {(item.price * item.quantity).toFixed(2)}</span>
                                            </div>
                                            <div className="item-actions">
                                                <button className="btn-remove">
                                                    <i className="fas fa-trash"></i>
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {cartItems.length > 0 && (
                            <div className="cart-summary">
                                <h2>Resumo do Pedido</h2>
                                <div className="summary-details">
                                    <div className="summary-line">
                                        <span>Subtotal:</span>
                                        <span>R$ {calculateSubtotal().toFixed(2)}</span>
                                    </div>
                                    <div className="summary-line">
                                        <span>Frete:</span>
                                        <span>R$ 50,00</span>
                                    </div>
                                    <div className="summary-line total">
                                        <span>Total:</span>
                                        <span>R$ {calculateTotal().toFixed(2)}</span>
                                    </div>
                                </div>
                                
                                <div className="cart-actions">
                                    <a href="/" className="btn btn-secondary">Continuar Comprando</a>
                                    <a href="/pagamento" className="btn btn-primary">Finalizar Compra</a>
                                </div>

                                <div className="promo-code">
                                    <h3>Cupom de Desconto</h3>
                                    <div className="promo-input">
                                        <input type="text" placeholder="Digite seu cupom" />
                                        <button className="btn btn-secondary">Aplicar</button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

export default Carrinho;
