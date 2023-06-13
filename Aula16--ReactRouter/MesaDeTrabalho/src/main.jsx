/* 
Digital House Brasil
  - Front end III (ReactJS)
  - Possível solução para a Mesa de Trabalho "Aula 16: Mesa de trabalho" 
  - Prof: Marcos V. Martins
*/

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Home from "./Home";
import Contact from "./Contact";
import Beer from "./Beer";
import UnknownRoute from "./UnknownRoute";
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='home' element={<Home />} />
        <Route path='contact' element={<Contact />} />
        <Route path='beer/:id' element={<Beer />} />
        {/* Rota genérica quando a rota é desconhecida */}
        <Route path='*' element={<UnknownRoute />} />
      </Route>
    </Routes>
  </BrowserRouter>
)