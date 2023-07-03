import './App.css'
import React from 'react'
import Dog from './Dog'

function App() {

  return (
    <div className="App">

      {/* DICA: Utilizar o ErrorBoundary como elemento pai dos demais componentes */}
        <Dog breed={"husky"} /> {/* Caso de sucesso na API */}
        {/* <Dog breed={"ruffles"} /> */} {/* Caso de erro na API */}

      {/* DICA: Veja a lista completa de raças da API: https://dog.ceo/dog-api/breeds-list */}
    </div>
  )
}

export default App;