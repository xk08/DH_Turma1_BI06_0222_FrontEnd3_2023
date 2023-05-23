import "./styles.css";
import ctdEstrutura from "./ctd_estrutura";
import ItemComponent from "./components/ItemComponent";
import ButtonComponent from "./components/ButtonComponent";

import ButtonStateComponent from "./components/ButtonStateComponent";

import { useState } from "react";


function App() {

  /// Definindo o estado do Array
  const [arrayFiltered, setArrayFiltered] = useState([]);

  const executefilterAndDefineArrayData = (year) => {
    const array = ctdEstrutura.filter(item => item.ano.match(year));
    setArrayFiltered(array); /// Função que atualiza o array (e o estado)

  };

  return (
    <div className="container">

      <br />
      <br />

      <ButtonStateComponent />

      <br />
      <br />

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