import './App.css';

import InputComponent from "./components/InputComponent";
import FormComponent from "./components/FormComponent";

function App() {
  return (
    /*
      /// Primeira parte da Aula
      <>
        <HelloClassComponent />
        <HelloFunctionComponent />
      </>
   */
    <>

      {/* /// Segunda parte da Aula */}

      <FormComponent action="teste-aula-4">

        <InputComponent
          label="Titulo"
          type="text"

        />
        <br />
        <br />

        <InputComponent
          label="Descrição"
          type="text"
        />

        <br />
        <br />

        <InputComponent
          label="Valor"
          type="number"

        />

        <br />
        <br />

        <InputComponent
          label="IMG URL"
          type="url"
        />

        <br />
        <br />

        <button>Salvar</button>

      </FormComponent>

    </>
  )
}

export default App