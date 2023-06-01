/* 
Digital House Brasil
  - Front end III (ReactJS)
  - Possível solução para o Checkpoint I da disciplina
  - Prof: Marcos V. Martins
*/

import './App.css';
import { useState } from "react";
import InputComponent from "./components/Input/InputComponent";
import CardComponent from "./components/Card/CardComponent";
import CardsListComponent from "./components/CardsList/CardsListComponent";

function App() {

  /// Estados dos componentes de Input
  const [colorName, setColorName] = useState("");
  const [colorCode, setColorCode] = useState("");

  /// Estado do conteúdo dos Cards
  const [cards, setCards] = useState([]);

  /// Estados de validações do formulário
  const [formIsValid, setFormIsValid] = useState(false); /// Controla o botão de 'Adicionar'
  const [showMessageError, setShowMessageError] = useState(false); /// Controla a mensagem de erro

  ///Funções que atualizam os estados dos Inputs
  const handleChangeColorName = (e) => {
    setColorName(normalizeInputData(e.target.value)); /* Normaliza o valor antes de atualizar o estado */
  }

  const handleChangeColorCode = (e) => {
    setColorCode(normalizeInputData(e.target.value));
  }

  /// Função que retira espaços em branco nos campos de input (Normalização)
  const normalizeInputData = (data) => data.trim();

  const formValidator = () => {
    /* Validações realizadas:
      -> Nome da cor: possuir ao menos 3 caracteres;
      -> Código da cor: possuir ao menos 7 caracteres
      -> Código da cor: possuir ao menos 1 número (foi utilizado RegExp)
      -> Código da cor: o primeiro caractere deve ser o "#" (NOTA: Regra adicionada pelo professor)
    */
    if (
      (colorName.length >= 3)
      && (colorCode.length >= 7)
      && (/\d/.test(colorCode))
      && (colorCode.startsWith("#"))
    ) {
      setFormIsValid(true);
      setShowMessageError(false);
    } else {
      setFormIsValid(false);
      setShowMessageError(true);
    }
  }

  /// Função que atualiza o objeto/estado com os dados do Card
  const handleSaveForm = () => {

    /// Adicionamos um novo card ao clicar em 'Adicionar', e atualizamos o estado da lista que será renderizada
    setCards(
      [
        ...cards, /// Captura-se o estado anterior da lista
        {
          name: colorName,
          code: colorCode
        }
      ]
    );

    /// Limpando os campos do formulário após salvar os dados
    setColorName("");
    setColorCode("");
    setFormIsValid(false);
    setShowMessageError(false);
  }

  return (
    <>
      <div
        className="form"
        /* CSS Inline - Altera a borda em caso de erro no form */
        style={{
          border:
            showMessageError
              ? "2px solid #913f3f"
              : ""
        }}
      >

        <h2>ADICIONAR NOVA COR</h2>

        <div className="formInputs">
          <InputComponent
            description="Nome"
            type="text"
            value={colorName}
            fnOnChange={handleChangeColorName}
            fnOnKeyUp={formValidator}
            placeholder="Ex: Roxo"
          />

          <InputComponent
            description="Código Hexadecimal"
            type="text"
            value={colorCode}
            fnOnChange={handleChangeColorCode}
            fnOnKeyUp={formValidator}
            placeholder="Ex: #9122d6"
          />

          <button
            onClick={handleSaveForm}
            type="submit"
            disabled={!formIsValid}
          >
            Adicionar
          </button>

        </div>

      </div>
      <small>{
        showMessageError ?
          "Por favor, verifique os dados inseridos no formulário"
          : ""}
      </small>

      <h2>CORES FAVORITAS</h2>

      <CardsListComponent>

        {/* Verifica-se se o Array de cores não está vazio */}
        {cards.length > 0 ? /// Se não estiver vazio...
          cards.map(
            card => {
              return (
                <CardComponent
                  key={(card.code + card.name)} /* Chave composta */
                  name={card.name}
                  code={card.code}
                />
              )
            })
          : /// Se estiver vazio...
          <CardComponent
            name="Cor indefinida"
          />
        }

      </CardsListComponent>

    </>
  )
}

export default App