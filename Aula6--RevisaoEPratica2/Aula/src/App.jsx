import ctdEstrutura from "./ctd_estrutura";
import ItemComponent from "./components/ItemComponent";
import "./styles.css";

function App() {

  return (
    <div className="container">
      <h1 className="title">CTD - Jornada do Aluno</h1>
      {
        ctdEstrutura.map((item, index) => {
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