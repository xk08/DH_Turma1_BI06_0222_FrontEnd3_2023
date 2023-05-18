import "./styles.css";
import ctdEstrutura from "./ctd_estrutura";
import ItemComponent from "./components/ItemComponent";
import ButtonComponent from "./components/ButtonComponent";

import ReactDOM from 'react-dom/client';

let arrayFiltered = [];

const executefilterAndDefineArrayData = (year) => {
  arrayFiltered = ctdEstrutura.filter(item => item.ano.match(year));
  console.log("Clicou no botão");
  console.log(arrayFiltered);

  /// Não recomendado utilizar assim, necessário adicionar um Hook
  ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
  )

};


function App() {

  return (
    <div className="container">

      <h1 className="title">CTD - Jornada do Aluno</h1>

      <h1 className="filter">Filtrar por ano</h1>

      <ButtonComponent
        description="Ano 1"
        fn={() => executefilterAndDefineArrayData("1")}
      />

      <ButtonComponent
        description="Ano 2"
        fn={() => executefilterAndDefineArrayData("2")}
      />

      <ButtonComponent
        description="Ano 3"
        fn={() => executefilterAndDefineArrayData("3")}
      />

      {
        arrayFiltered.map((item, index) => {
          
          return <ItemComponent
            key={index}
            {...item}
          />
        })
      }
    </div>
  )
}

export default App;