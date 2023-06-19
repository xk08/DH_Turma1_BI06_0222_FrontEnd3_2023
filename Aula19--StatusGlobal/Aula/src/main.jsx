import './index.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import App from './App';
import Episodes from "./pages/Episodes";
import NotFound from "./pages/NotFound";
import Locations from "./pages/Locations";
import Characters from "./pages/Characters";
import Character from "./pages/Character";

ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
        <Route path="/" element={<Navigate to="/episodes" />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/characters/:name" element={<Character />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>

);