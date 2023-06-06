import axios from 'axios';
import './App.css';


function App() {

  /* Axios está instalado no projeto! 
    -> https://www.npmjs.com/package/axios
  */

  /* API IBGE Endpoints:
  
  -> Busca lista de UFs/estados: 
    https://servicodados.ibge.gov.br/api/v1/localidades/estados

  -> Busca cidades por estado/UF: 
    https://servicodados.ibge.gov.br/api/v1/localidades/estados/{UF}/municipios
 */

  return (
    <>

      <div className='div-selects'>

        <h1>IBGE: Localidades</h1>

        <label>Selecione o estado</label>
        <br />
        <select
          value={"default"}
          onChange={() => { }}
        >
          <option value="default">Selecione...</option>
          <option value="RS">RS</option>
          <option value="SP">SP</option>
          <option value="RJ">RJ</option>
        </select>

        <br />
        <br />

        <label>Selecione a cidade</label>
        <br />
        <select
          disabled={true}
          value={"city1"}
          onChange={() => { }}
        >
          <option value="default">Selecione...</option>
          <option value="city1">Cidade 1</option>
          <option value="city2">Cidade 2</option>
          <option value="city3">Cidade 3</option>
        </select>


      </div>


      <div className='div-resposta'>
        <h3>Dados selecionados</h3>
        <p>Estado: {"SP" ?? "Indefinido"}</p>
        <p>Cidade: {"Cidade 1" ?? "Indefinida"}</p>
      </div>
    </>
  )
}

export default App;