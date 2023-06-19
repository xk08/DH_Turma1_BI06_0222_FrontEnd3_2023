/* 
Digital House Brasil
  - Front end III (ReactJS)
  - Possível solução para a Mesa de Trabalho "Aula 18: Mesa de trabalho" 
  - Prof: Marcos V. Martins
*/
import './index.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from './components/Home/Home';
import Details from './components/Details/Details';
import NotFound from './components/Global/NotFound';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>

    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="*" element={<NotFound />} />
    </Routes>

  </BrowserRouter>
);