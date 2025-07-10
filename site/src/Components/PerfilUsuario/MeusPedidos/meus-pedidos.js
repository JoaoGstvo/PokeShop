
import React from "react";
import './meus-pedidos.css';

function MeusPedidos({ voltar }) {
    const pedidos = [
        {
            id: '#001',
            data: '15/03/2024',
            status: 'Entregue',
            total: 'R$ 1.200,00',
            itens: 2,
            statusClass: 'entregue'
        },
        {
            id: '#002',
            data: '20/03/2024',
            status: 'Em trânsito',
            total: 'R$ 800,00',
            itens: 1,
            statusClass: 'transito'
        },
        {
            id: '#003',
            data: '25/03/2024',
            status: 'Processando',
            total: 'R$ 650,00',
            itens: 1,
            statusClass: 'processando'
        }
    ];

    return (
        <div className="tela-perfil">
            <div className="tela-header">
                <button className="btn-voltar" onClick={voltar}>
                    <i className="fas fa-arrow-left"></i>
                </button>
                <h3>Meus Pedidos</h3>
            </div>

            <div className="lista-pedidos">
                {pedidos.map(pedido => (
                    <div key={pedido.id} className="pedido-item">
                        <div className="pedido-header">
                            <div className="pedido-info">
                                <span className="pedido-id">{pedido.id}</span>
                                <span className="pedido-data">{pedido.data}</span>
                            </div>
                            <span className={`pedido-status ${pedido.statusClass}`}>
                                {pedido.status}
                            </span>
                        </div>
                        
                        <div className="pedido-detalhes">
                            <div className="pedido-resumo">
                                <span>{pedido.itens} {pedido.itens === 1 ? 'item' : 'itens'}</span>
                                <span className="pedido-total">{pedido.total}</span>
                            </div>
                            
                            <button className="btn-ver-detalhes">
                                Ver detalhes
                                <i className="fas fa-chevron-right"></i>
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {pedidos.length === 0 && (
                <div className="sem-pedidos">
                    <i className="fas fa-shopping-bag"></i>
                    <h4>Nenhum pedido encontrado</h4>
                    <p>Você ainda não fez nenhum pedido.</p>
                </div>
            )}
        </div>
    );
}

export default MeusPedidos;
