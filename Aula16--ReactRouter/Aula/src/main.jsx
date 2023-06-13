import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';


import Episodes from "./pages/Episodes";
import NotFound from "./pages/NotFound";
import Locations from "./pages/Locations";
import Characters from "./pages/Characters";
import Character from "./pages/Character";

import { BrowserRouter, Routes, Route } from "react-router-dom";



ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>

    <Routes>

      <Route path="/" element={<App />} >

        <Route path="/episodes" element={<Episodes />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/characters/:name" element={<Character />} />
        <Route path="*" element={<NotFound />} />

      </Route>

    </Routes>

  </BrowserRouter>

);