import './App.css';
import { useState } from "react";
import InputComponent from "./components/Input/InputComponent";
import CardComponent from "./components/Card/CardComponent";

function App() {

  /// Estados dos componentes de Input
  const [inputTitle, setInputTitle] = useState("");
  const [inputImageUrl, setInputImageUrl] = useState("");

  /// Estado do conteúdo do Card
  const [cardData, setCardData] = useState({});

  ///Funções que atualizam os estados do Input
  const handleChangeInputTitle = (e) => {
    setInputTitle(e.target.value);
  }

  const handleChangeInputImageUrl = (e) => {
    setInputImageUrl(e.target.value);
  }

  /// Função que salva o objeto/estado com os dados do Card
  const handleSaveForm = () => {
    console.log("Clicou no botão 'Salvar' ");

    /// Enviando para o objeto/estado "cardData" os dados do Input
    setCardData(
      {
        title: inputTitle,
        imageUrl: inputImageUrl
      }
    );

    /// Limpando os campos do formulário após salvar os dados
    setInputTitle("");
    setInputImageUrl("");
  }

  return (
    <>
      <h2>Template Modelo CheckPoint I</h2>

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

      <button
        onClick={handleSaveForm}>
        Salvar
      </button>

      <CardComponent
        title={cardData.title}
        img={cardData.imageUrl}
      />

    </>
  )
}

export default App