/* 
Digital House Brasil
  - Front end III (ReactJS)
  - Possível solução para a Mesa de Trabalho "Aula 16: Mesa de trabalho" 
  - Prof: Marcos V. Martins
*/

import { Outlet } from "react-router-dom";
import NavBar from "./components/Navbar";

function App() {
  return (
    <div>
      <NavBar />
      <h1>Mais do que bebidas, vamos celebrar o encontro!!</h1>
      <Outlet />
    </div>
  )
}

export default App;