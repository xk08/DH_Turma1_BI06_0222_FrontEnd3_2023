import ctdEstrutura from "./ctd_estrutura";
import ItemComponent from "./components/ItemComponent";
import ButtonComponent from "./components/ButtonComponent";
import "./styles.css";

import ReactDOM from 'react-dom/client';

/// Declarando Array com escopo global (para o App.jsx)
let arrayCtd = []

/// Função que filtra os dados do array com base no ano recebido
const handleClickButton = (ano) => {
  console.log(ano);

  /// Atribuindo os dados ao Array após o filtro
  arrayCtd = ctdEstrutura.filter(item => item.ano.match(ano));
  console.log(arrayCtd);

  /// Reconstruindo a renderização da página (PS: Não é a forma recomendada - Veremos uma forma melhor)
  ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
  )
}

function App() {

  return (
    <div className="container">

      <h1 className="title">CTD - Jornada do Aluno</h1>

      <ButtonComponent
        label="Ano 1"
        fnOnClick={
          () => handleClickButton("1")
        } /* Enviando a função via prop para o component */
      />

      <br />

      <ButtonComponent
        label="Ano 2"
        fnOnClick={
          () => handleClickButton("2")
        }
      />

      <br />

      <ButtonComponent
        label="Ano 3"
        fnOnClick={
          () => handleClickButton("3")
        }
      />

      {
        /// Segunda abordagem
        arrayCtd.map((item, index) => {
          return (
            <ItemComponent
              key={index}
              bimestre={item.bimestre}
              disciplinas={item.disciplinas}
              ano={item.ano}
            /* {...item} */ /* Outra forma de enviar as props para o Component (Spread Operator) */
            />
          )

          /// Primeira abordagem
          /*  if(item.ano.match("1")) {
             return (
               <ItemComponent
                 key={index}
                 bimestre={item.bimestre}
                 disciplinas={item.disciplinas}
                 ano={item.ano}
               // {...item} 
               />
             )
           } */
        })
      }
    </div>
  )

}

export default App;