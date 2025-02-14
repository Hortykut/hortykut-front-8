import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './paginas/home/Home';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import Login from './paginas/login/Login';
import Sobre from './paginas/sobre/Sobre';
import ListaProdutos from './components/listaprodutos/ListaProdutos';
import Planos from './paginas/planos/Planos';
import './App.css';
import Depoimentos from './paginas/depoimentos/Depoimentos';

function App() {
  return (
    <BrowserRouter>
      {/* Tudo que precisa ser renderizado na tela que vai direcionar para algum lugar fica aqui */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cadastrousuario" element={<CadastroUsuario/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/cursos" element={<ListaProdutos />} />
        <Route path="/planos" element={<Planos />} />
        <Route path="/depoimentos" element={<Depoimentos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;