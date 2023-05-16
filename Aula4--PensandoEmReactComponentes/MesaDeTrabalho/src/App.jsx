/* 
Digital House Brasil
- Front end III (ReactJS)
- Possível solução para a Mesa de Trabalho "Aula 4: Hello World em diferentes estruturas" 
- Prof: Marcos V. Martins
*/
import './App.css';
import BoasVindasComponent from "./components/BoasVindasComponent";
import HelloComponent from "./components/HelloComponent";

function App() {

  return (
    <>
      <BoasVindasComponent >
        <HelloComponent
          nome="Marcos V. Martins"
          detalhes="(Professor)" />
      </BoasVindasComponent>
    </>
  )
}

export default App