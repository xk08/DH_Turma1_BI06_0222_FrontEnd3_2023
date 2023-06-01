/* 
Digital House Brasil
  - Front end III (ReactJS)
  - Possível solução para o Checkpoint I da disciplina 
  - Prof: Marcos V. Martins
*/

import './App.css';
import { useState } from "react";

import InputComponent from "./components/Input/InputComponent";
import CardsListComponent from './components/CardsList/CardsListComponent';

function App() {

  /// Estados dos componentes de Input
  const [inputTitle, setInputTitle] = useState("");
  const [inputImageUrl, setInputImageUrl] = useState("");

  /// Estado do Array de Cards
  const [cards, setCards] = useState([]);

  /// Estados de validações do formulário
  const [inputTitleIsValid, setInputTitleIsValid] = useState(false);
  const [inputImageUrlIsValid, setInputImageUrlIsValid] = useState(false);
  const [formIsValid, setFormIsValid] = useState(undefined); /// Começar como indefinido


  /// Retirando espaços em branco do input
  const normalizeInputData = (text) => text.trim();

  ///Funções que atualizam os estados do Input
  const handleChangeInputTitle = (e) => {

    setInputTitle(e.target.value);

    /// Requisito: "Não deverá conter espaços em branco no início"
    const inputNormalized = normalizeInputData(e.target.value);

    /// Requisito: "O tamanho do texto inserido deverá ser de no mínimo 3 caracteres"
    if (inputNormalized.length >= 3) {
      setInputTitleIsValid(true);
    } else {
      setInputTitleIsValid(false);
    }

  }

  const handleChangeInputImageUrl = (e) => {

    setInputImageUrl(e.target.value);

    /// Requisitos: "contenha ao menos 6 caracteres" e "um dos quais deverá ser um número"
    if (e.target.value.length >= 6 && /\d/.test(e.target.value)) { /// Utilizamos RegExp pra validar o número
      setInputImageUrlIsValid(true);
    } else {
      setInputImageUrlIsValid(false);
    }
  }

  /// Função que salva/atualiza os dados do card no array de Cards
  const handleSaveForm = () => {

    ///Validando após clicar no botão (e antes de salvar os dados do card)
    if (inputTitleIsValid && inputImageUrlIsValid) {

      setFormIsValid(true);

      /// Adicionamos os dados capturados via Form no Array de Cards (como um novo objeto)
      setCards(
        [
          ...cards, /// Capturamos o estado anterior do Array
          {
            title: inputTitle,
            imageUrl: inputImageUrl
          }
        ]
      );

      /// Limpando os campos do formulário após salvar os dados
      setInputTitle("");
      setInputImageUrl("");
      setFormIsValid(undefined); /// Retiramos o texto de validação

    } else {
      setFormIsValid(false);
    }

  }

  return (
    <>
      <h2>CheckPoint I</h2>

      <InputComponent
        description="Título do Anime"
        type="text"
        value={inputTitle}
        fnOnChange={handleChangeInputTitle}
      />

      <InputComponent
        description="Imagem URL"
        type="url"
        value={inputImageUrl}
        fnOnChange={handleChangeInputImageUrl}
      />


      {/* Requisito: "Mensagem de erro se validações não passarem" */}
      <h5 style={{
        color: "red"
      }}> {
          (!formIsValid && formIsValid != undefined) ?
            "Por favor, verifique os dados inseridos no formulário"
            : ""
        }</h5>

      <button
        onClick={handleSaveForm}>
        Enviar
      </button>

      <h2>Animes</h2>

      {/* Renderizamos a lista de cards */}
      <CardsListComponent
        cards={cards}
      />

    </>
  )
}

export default App