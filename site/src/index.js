import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Landing from './Pages/LandingPage/index.js';
import PokemonDetail from './Pages/PokemonDetails/index.js';
import AdminPanel from './Pages/Adm/index.js';
import Login from './Pages/Login/index.js';
import Cadastro from './Pages/Cadastro/index.js';
import LoginADM from './Pages/Adm/Login/login.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/pokemonDetail" element={<PokemonDetail />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/adminlogin" element={<LoginADM />} />
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
