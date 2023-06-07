import axios from 'axios';

import './App.css';
import { useEffect, useState } from 'react';

/* Axios está instalado no projeto! 
  -> https://www.npmjs.com/package/axios
*/

/* API IBGE Endpoints:
 
-> Busca lista de UFs/estados: 
  https://servicodados.ibge.gov.br/api/v1/localidades/estados

-> Busca cidades por estado/UF: 
  https://servicodados.ibge.gov.br/api/v1/localidades/estados/{UF}/municipios
*/

function App() {

  const [estados, setEstados] = useState([]);
  const [cidades, setCidades] = useState([]);

  const [estadoSelecionado, setEstadoSelecionado] = useState(undefined);
  const [cidadeSelecionada, setCidadeSelecionada] = useState(undefined);

  useEffect(
    () => {
      buscaEstadosApi();
    }, []
  );

  const buscaEstadosApi = async () => {
    console.log("Buscando estados brasileiros....");

    const response = await axios.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados");

    setEstados(
      [
        {
          id: 0,
          sigla: "Selecione..."
        },
        ...response.data
      ]
    )

    console.log(response.data);
  }

  useEffect(
    () => {
      if (estadoSelecionado) {
        buscaCidadesApi();
      }
    }, [estadoSelecionado]
  );

  const buscaCidadesApi = async () => {

    console.log("Buscando cidades brasileiras com base no estado/uf");

    const response = await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoSelecionado}/municipios`);

    console.log(response.data);

    setCidades(
      [
        {
          id: 0,
          nome: "Selecione..."
        },
        ...response.data
      ]
    );

  }

  return (
    <>

      <div className='div-selects'>

        <h1>IBGE: Localidades</h1>

        <label>Selecione o estado</label>
        <br />
        <select
          value={estadoSelecionado}
          onChange={(e) => setEstadoSelecionado(e.target.value)}
        >
          {
            estados.map(estado => {
              return (
                <option
                  key={estado.id}
                  value={estado.sigla}>
                  {estado.sigla} - {estado.nome}
                </option>
              )
            })

          }
        </select>

        <br />
        <br />

        <label>Selecione a cidade</label>
        <br />
        <select
          disabled={cidades.length > 0 ? false : true}
          value={cidadeSelecionada}
          onChange={(e) => setCidadeSelecionada(e.target.value)}
        >
          {
            cidades.map(cidade => {
              return (
                <option
                  key={cidade.id}
                  value={cidade.nome}>
                  {cidade.nome}
                </option>
              )
            })
          }
          <option value="default">Selecione...</option>

        </select>


      </div>

      <div className='div-resposta'>
        <h3>Dados selecionados</h3>
        <p>Estado: {estadoSelecionado ?? "Indefinido"}</p>
        <p>Cidade: {cidadeSelecionada ?? "Indefinida"}</p>
      </div>
    </>
  )
}

export default App;