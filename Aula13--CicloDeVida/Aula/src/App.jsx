import { useEffect, useState } from 'react';

import './App.css';

import ContadorDeCliquesCompoent from './ContadorDeCliquesComponent';

function App() {

  const [checkbox, setCheckbox] = useState(false);

  useEffect(
    () => {
      console.log("<App/> Foi Montado");

      return function limpaComponente() {
        console.log("<App/> Foi Desmontado/Limpo");
      }
    }, []
  )

  return (
    <>
      <h2>Ciclo de Vida (Hook: useEffect())</h2>

      <input type="checkbox"
        value={checkbox}
        onChange={
          () => setCheckbox(!checkbox)
        }

      />
      <label>Exibir contador de cliques</label>

      {
        checkbox ? <ContadorDeCliquesCompoent /> : <></>
      }

    </>
  )
}

export default App;