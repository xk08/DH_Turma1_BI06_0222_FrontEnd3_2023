/* 
Digital House Brasil
    - Front end III (ReactJS)
    - Possível solução para a Mesa de Trabalho "Aula 19: Mesa de trabalho" 
    - Prof: Marcos V. Martins
*/
import './App.css';

import { useState } from 'react';
import LanguageContext, { languages } from './context';

import Navbar from './components/Navbar';
import Body from './components/Body';

function App() {

  /// Iniciamos nosso estado com algum idioma definido
  const [language, setLanguage] = useState(languages.portuguese);

  /// A função recebe por parametro o código da linguagem e atualiza o estado de acordo com o selecionado
  const handleChangeLA = (lang) => {

    if (lang == "PTBR") {
      setLanguage(languages.portuguese);
    } else if (lang == "EN") {
      setLanguage(languages.english);
    } else {
      setLanguage(languages.spanish);
    }

  }

  return (
    <div className="App">
      {/* Definimos o provider como principal componente de nossa aplicação */}
      {/* Enviamos ao provider: o estado da linguagem e a função que atualiza o estado */}
      <LanguageContext.Provider value={{ language, handleChangeLA }}>
        <Navbar />
        <Body />
      </LanguageContext.Provider>
    </div>
  )
}

export default App;