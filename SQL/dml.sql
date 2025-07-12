
-- Script de inserção de dados iniciais para o sistema de pokémons
-- PostgreSQL DML

-- Inserir administrador padrão
INSERT INTO administradores (email, senha) VALUES 
('admin@pokeshop.com', '$2b$10$hash_da_senha_admin') -- senha: admin123
ON CONFLICT (email) DO NOTHING;

-- Inserir categorias
INSERT INTO categorias (nome, icone) VALUES 
('Starter', '🔥'),
('Lendário', '⭐'),
('Evento', '🎁'),
('Comum', '🌱'),
('Raro', '💎'),
('Mítico', '✨')
ON CONFLICT (nome) DO NOTHING;

-- Inserir pokémons de exemplo
INSERT INTO pokemons (nome, numero, tipo, preco, descricao, stats, movimentos, imagem, categoria_id) VALUES 
(
    'Charizard', 
    6, 
    'Fogo/Voador', 
    1500.00, 
    'Um Pokémon dragão poderoso que cospe fogo intenso.',
    '{"hp": 78, "attack": 84, "defense": 78, "speed": 100}',
    '["Lançar Chamas", "Voo", "Garra do Dragão", "Explosão de Fogo"]',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png',
    1
),
(
    'Blastoise', 
    9, 
    'Água', 
    1450.00, 
    'Um Pokémon tartaruga com canhões de água poderosos.',
    '{"hp": 79, "attack": 83, "defense": 100, "speed": 78}',
    '["Hidro Bomba", "Surf", "Jato de Água", "Proteção"]',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png',
    1
),
(
    'Venusaur', 
    3, 
    'Grama/Veneno', 
    1400.00, 
    'Um Pokémon planta com uma flor gigante nas costas.',
    '{"hp": 80, "attack": 82, "defense": 83, "speed": 80}',
    '["Lâmina de Folha", "Bomba de Lodo", "Raio Solar", "Síntese"]',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png',
    1
),
(
    'Pikachu', 
    25, 
    'Elétrico', 
    800.00, 
    'O mascote mais famoso dos Pokémon, conhecido por seus ataques elétricos.',
    '{"hp": 35, "attack": 55, "defense": 40, "speed": 90}',
    '["Choque do Trovão", "Ataque Rápido", "Cauda de Ferro", "Trovão"]',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
    4
),
(
    'Mewtwo', 
    150, 
    'Psíquico', 
    5000.00, 
    'Um Pokémon lendário criado geneticamente com poderes psíquicos imensos.',
    '{"hp": 106, "attack": 110, "defense": 90, "speed": 130}',
    '["Psicópico", "Sombra Cósmica", "Recuperação", "Barreira"]',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png',
    2
),
(
    'Mew', 
    151, 
    'Psíquico', 
    6000.00, 
    'Um Pokémon mítico ancestral que pode aprender qualquer movimento.',
    '{"hp": 100, "attack": 100, "defense": 100, "speed": 100}',
    '["Psicópico", "Transformação", "Teletransporte", "Bomba Cósmica"]',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png',
    6
),
(
    'Lugia', 
    249, 
    'Psíquico/Voador', 
    2800.00, 
    'Lugia distribuído em evento limitado com poderes sobre os ventos.',
    '{"hp": 106, "attack": 90, "defense": 130, "speed": 110}',
    '["Aeroblast", "Psicópico", "Recuperação", "Hidro Bomba"]',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/249.png',
    3
),
(
    'Gyarados', 
    130, 
    'Água/Voador', 
    1200.00, 
    'Um Pokémon feroz que evoluiu de um Magikarp fraco.',
    '{"hp": 95, "attack": 125, "defense": 79, "speed": 81}',
    '["Hidro Bomba", "Hyper Beam", "Terremoto", "Dança do Dragão"]',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/130.png',
    5
),
(
    'Dragonite', 
    149, 
    'Dragão/Voador', 
    1800.00, 
    'Um Pokémon dragão gentil, mas extremamente poderoso.',
    '{"hp": 91, "attack": 134, "defense": 95, "speed": 80}',
    '["Garra do Dragão", "Hyper Beam", "Blizzard", "Fogo Fátuo"]',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/149.png',
    5
),
(
    'Eevee', 
    133, 
    'Normal', 
    600.00, 
    'Um Pokémon com DNA instável que pode evoluir de várias formas.',
    '{"hp": 55, "attack": 55, "defense": 50, "speed": 55}',
    '["Ataque Rápido", "Cauda de Ferro", "Mordida", "Encanto"]',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png',
    4
);

-- Inserir usuário de exemplo
INSERT INTO usuarios (nome, sobrenome, email, telefone, senha, data_nascimento) VALUES 
('João', 'Silva', 'joao@example.com', '11999999999', '$2b$10$hash_da_senha', '1990-05-15'),
('Maria', 'Santos', 'maria@example.com', '11888888888', '$2b$10$hash_da_senha', '1985-10-20')
ON CONFLICT (email) DO NOTHING;

-- Inserir alguns itens no carrinho (exemplo)
INSERT INTO carrinho (usuario_id, pokemon_id, quantidade, preco) VALUES 
(1, 1, 1, 1500.00),
(1, 4, 2, 800.00),
(2, 2, 1, 1450.00)
ON CONFLICT (usuario_id, pokemon_id) DO UPDATE SET 
quantidade = EXCLUDED.quantidade,
preco = EXCLUDED.preco,
updated_at = CURRENT_TIMESTAMP;

-- Inserir pedido de exemplo
INSERT INTO pedidos (usuario_id, total, status, dados_comprador, metodo_pagamento) VALUES 
(1, 3100.00, 'processando', 
'{"nome": "João Silva", "endereco": "Rua das Flores, 123", "cidade": "São Paulo", "cep": "01234-567"}', 
'cartao_credito');

-- Inserir itens do pedido
INSERT INTO itens_pedido (pedido_id, pokemon_id, quantidade, preco_unitario, subtotal) VALUES 
(1, 1, 1, 1500.00, 1500.00),
(1, 4, 2, 800.00, 1600.00);

-- Função para atualizar timestamp de updated_at automaticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Triggers para atualizar automaticamente o campo updated_at
CREATE TRIGGER update_usuarios_updated_at BEFORE UPDATE ON usuarios
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_pokemons_updated_at BEFORE UPDATE ON pokemons
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_carrinho_updated_at BEFORE UPDATE ON carrinho
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_pedidos_updated_at BEFORE UPDATE ON pedidos
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
