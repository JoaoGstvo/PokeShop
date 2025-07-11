import { BrowserRouter, Routes, Route } from 'react-router-dom';


import PaginaInicial from './Pages/LandingPage/index.js';
import DetalhesPokemon from './Pages/PokemonDetails/index.js';
import PainelAdministrativo from './Pages/Adm/index.js';
import PaginaLogin from './Pages/Login/index.js';
import PaginaCadastro from './Pages/Cadastro/index.js';
import LoginAdministrativo from './Pages/Adm/Login/login.js';
import PaginaCarrinho from './Pages/Carrinho/index.js';
import PaginaPagamento from './Pages/Pagamento/index.js';



export default function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaInicial />} />
                <Route path="/detalhes-pokemon" element={<DetalhesPokemon />} />
                <Route path="/painel-administrativo" element={<PainelAdministrativo />} />
                <Route path="/login" element={<PaginaLogin />} />
                <Route path="/cadastro" element={<PaginaCadastro />} />
                <Route path="/login-administrativo" element={<LoginAdministrativo />} />
                <Route path="/carrinho" element={<PaginaCarrinho />} />
                <Route path="/pagamento" element={<PaginaPagamento />} />
                <Route path="/painel-administrativo" element={<PainelAdministrativo />} />
            </Routes>
        </BrowserRouter>
    )
}