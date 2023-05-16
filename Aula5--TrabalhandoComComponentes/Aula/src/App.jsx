import ctdEstrutura from "./ctd_estrutura";

function App() {

  return (
    <>
      <h1>CTD - Jornada do Aluno</h1>

      <div>
        <h1>Bimestre {ctdEstrutura[0].bimestre} - Ano {ctdEstrutura[0].ano}</h1>
        <h3>Disciplinas</h3>
        <p>{ctdEstrutura[0].disciplinas[0]}</p>
        <p>{ctdEstrutura[0].disciplinas[1]}</p>
        <p>{ctdEstrutura[0].disciplinas[2]}</p>
      </div>

      <div>
        <h1>Bimestre {ctdEstrutura[1].bimestre} - Ano {ctdEstrutura[1].ano}</h1>
        <h3>Disciplinas</h3>
        <p>{ctdEstrutura[1].disciplinas[0]}</p>
        <p>{ctdEstrutura[1].disciplinas[1]}</p>
        <p>{ctdEstrutura[1].disciplinas[2]}</p>
      </div>

      <div>
        <h1>Bimestre {ctdEstrutura[2].bimestre} - Ano {ctdEstrutura[2].ano}</h1>
        <h3>Disciplinas</h3>
        <p>{ctdEstrutura[2].disciplinas[0]}</p>
        <p>{ctdEstrutura[2].disciplinas[1]}</p>
        <p>{ctdEstrutura[2].disciplinas[2]}</p>
      </div>
    </>
  )
}

export default App;