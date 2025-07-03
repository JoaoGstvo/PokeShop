
import "./index.css";
import Header from '../../Components/Header/header.js';
import Footer from '../../Components/Footer/footer.js';

function Pagamento() {
    return (
        <main className="payment-page">
            <Header />
            
            <section className="payment-section">
                <div className="container">
                    <div className="payment-header">
                        <h1><i className="fas fa-credit-card"></i> Finalizar Compra</h1>
                        <p>Complete seu pedido com segurança</p>
                    </div>

                    <div className="payment-content">
                        <div className="payment-forms">
                            {/* Informações de Entrega */}
                            <div className="form-section">
                                <h2><i className="fas fa-shipping-fast"></i> Informações de Entrega</h2>
                                <form className="payment-form">
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="nome">Nome Completo</label>
                                            <input type="text" id="nome" placeholder="Digite seu nome completo" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input type="email" id="email" placeholder="Digite seu email" />
                                        </div>
                                    </div>
                                    
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="telefone">Telefone</label>
                                            <input type="tel" id="telefone" placeholder="(11) 99999-9999" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="cep">CEP</label>
                                            <input type="text" id="cep" placeholder="00000-000" />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="endereco">Endereço</label>
                                        <input type="text" id="endereco" placeholder="Rua, número" />
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="bairro">Bairro</label>
                                            <input type="text" id="bairro" placeholder="Digite o bairro" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="cidade">Cidade</label>
                                            <input type="text" id="cidade" placeholder="Digite a cidade" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="estado">Estado</label>
                                            <select id="estado">
                                                <option value="">Selecione</option>
                                                <option value="SP">São Paulo</option>
                                                <option value="RJ">Rio de Janeiro</option>
                                                <option value="MG">Minas Gerais</option>
                                            </select>
                                        </div>
                                    </div>
                                </form>
                            </div>

                            {/* Método de Pagamento */}
                            <div className="form-section">
                                <h2><i className="fas fa-credit-card"></i> Método de Pagamento</h2>
                                
                                <div className="payment-methods">
                                    <div className="payment-method">
                                        <input type="radio" id="cartao" name="payment" value="cartao" defaultChecked />
                                        <label htmlFor="cartao" className="method-label">
                                            <i className="fas fa-credit-card"></i>
                                            <span>Cartão de Crédito</span>
                                        </label>
                                    </div>
                                    
                                    <div className="payment-method">
                                        <input type="radio" id="pix" name="payment" value="pix" />
                                        <label htmlFor="pix" className="method-label">
                                            <i className="fas fa-qrcode"></i>
                                            <span>PIX</span>
                                        </label>
                                    </div>
                                    
                                    <div className="payment-method">
                                        <input type="radio" id="boleto" name="payment" value="boleto" />
                                        <label htmlFor="boleto" className="method-label">
                                            <i className="fas fa-barcode"></i>
                                            <span>Boleto Bancário</span>
                                        </label>
                                    </div>
                                </div>

                                <div className="card-details">
                                    <div className="form-group">
                                        <label htmlFor="card-number">Número do Cartão</label>
                                        <input type="text" id="card-number" placeholder="0000 0000 0000 0000" />
                                    </div>
                                    
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="card-name">Nome no Cartão</label>
                                            <input type="text" id="card-name" placeholder="Nome como no cartão" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="card-expiry">Validade</label>
                                            <input type="text" id="card-expiry" placeholder="MM/AA" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="card-cvv">CVV</label>
                                            <input type="text" id="card-cvv" placeholder="000" />
                                        </div>
                                    </div>

                                    <div className="installments">
                                        <label htmlFor="parcelas">Parcelamento</label>
                                        <select id="parcelas">
                                            <option value="1">1x de R$ 4.350,00 (à vista)</option>
                                            <option value="2">2x de R$ 2.175,00</option>
                                            <option value="3">3x de R$ 1.450,00</option>
                                            <option value="6">6x de R$ 725,00</option>
                                            <option value="12">12x de R$ 362,50</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="order-summary">
                            <h2>Resumo do Pedido</h2>
                            
                            <div className="order-items">
                                <div className="order-item">
                                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png" alt="Mewtwo" />
                                    <div className="item-info">
                                        <h4>Mewtwo</h4>
                                        <span>Lendário</span>
                                        <span>Qtd: 1</span>
                                    </div>
                                    <span className="item-price">R$ 2.500,00</span>
                                </div>
                                
                                <div className="order-item">
                                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png" alt="Charizard Shiny" />
                                    <div className="item-info">
                                        <h4>Charizard Shiny</h4>
                                        <span>Shiny ✨</span>
                                        <span>Qtd: 2</span>
                                    </div>
                                    <span className="item-price">R$ 3.600,00</span>
                                </div>
                            </div>

                            <div className="order-totals">
                                <div className="total-line">
                                    <span>Subtotal:</span>
                                    <span>R$ 6.100,00</span>
                                </div>
                                <div className="total-line">
                                    <span>Frete:</span>
                                    <span>R$ 50,00</span>
                                </div>
                                <div className="total-line">
                                    <span>Desconto:</span>
                                    <span>-R$ 200,00</span>
                                </div>
                                <div className="total-line final-total">
                                    <span>Total:</span>
                                    <span>R$ 5.950,00</span>
                                </div>
                            </div>

                            <div className="security-info">
                                <div className="security-item">
                                    <i className="fas fa-shield-alt"></i>
                                    <span>Compra 100% Segura</span>
                                </div>
                                <div className="security-item">
                                    <i className="fas fa-truck"></i>
                                    <span>Entrega Garantida</span>
                                </div>
                                <div className="security-item">
                                    <i className="fas fa-undo"></i>
                                    <span>7 dias para troca</span>
                                </div>
                            </div>

                            <div className="order-actions">
                                <a href="/carrinho" className="btn btn-secondary">
                                    <i className="fas fa-arrow-left"></i> Voltar ao Carrinho
                                </a>
                                <button className="btn btn-primary btn-large">
                                    <i className="fas fa-lock"></i> Finalizar Compra
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

export default Pagamento;
