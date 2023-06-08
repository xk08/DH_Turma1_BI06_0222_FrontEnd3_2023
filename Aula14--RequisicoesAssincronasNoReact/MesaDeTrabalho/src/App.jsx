/* 
  Digital House Brasil
  - Front end III (ReactJS)
  - Possível solução para a Mesa de Trabalho "Aula 14: Mesa de trabalho" 
  - Prof: Marcos V. Martins
*/

import './App.css';
import { useEffect, useState } from 'react';
import CommentComponent from "./CommentComponent";

function App() {

  /// Estados da Lista de Comentários
  const [comments, setComments] = useState([]);
  const [commentsIsLoading, setCommentsIsLoading] = useState(true);
  const [commentsMessageError, setCommentsMessageError] = useState();

  /// Estados do Formulário
  const [commentTitle, setCommentTitle] = useState("");
  const [commentDescription, setCommentDescription] = useState("");
  const [commentEmail, setCommentEmail] = useState("");
  const [newCommentMessageError, setNewCommentMessageError] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  /// Executa 1x ao montar o componente
  useEffect(

    () => {

      console.log("<App /> foi MONTADO");

      const findCommentsInApi = async () => {

        setCommentsIsLoading(true);

        setTimeout(async () => {

          try {

            const response = await fetch("https://jsonplaceholder.typicode.com/comments");
            console.log("<App /> chamou a API");
            const data = await response.json();

            setCommentsIsLoading(false);

            if (data.length > 0) {
              console.log("<App /> obteve resposta positiva da API");
              setComments(data)
            } else {
              console.log("<App /> obteve resposta negativa da API");
              setComments([])
              setCommentsMessageError("Nenhum comentário foi encontrado.");
            }

          } catch (error) {
            console.log("<App /> obteve resposta negativa da API");
            setCommentsIsLoading(false);
            setCommentsMessageError(`Ocorreu algum erro ao buscar os comentários - Erro: ${error}`);
          }

        }, 2500);

      }

      findCommentsInApi();

      return function unmountingComponent() {
        console.log("<App /> foi DESMONTADO");
      }

    }, []);

  const handleCreateNewComment = async (event) => {
    event.preventDefault();

    const commentJs =
    {
      title: commentTitle,
      description: commentDescription,
      email: commentEmail
    }

    /// Limpando os campos do formulário
    setCommentTitle("");
    setCommentDescription("");
    setCommentEmail("");

    let response;

    try {
      /// Enviando para a API os dados do formulário (via POST pelo Fetch)
      response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: 'POST',
        body: JSON.stringify(commentJs),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });

    } catch (error) {
      setNewCommentMessageError(`Ocorreu algum erro ao salvar o comentário - Erro ${error}`);
    }

    /// NOTA DO PROFESSOR: A mesa não pede que o novo comentário seja renderizado em tela junto a lista obtida previamente
    ///Se obter sucesso no POST para a API
    if (response.status == 200 || response.status == 201) {

      const commentData = await response.json();
      setNewCommentMessageError(undefined);

      setComments([
        /// Adicionamos o novo elemento na posição inicial do Array
        {
          id: comments.length + 1,
          name: commentData.title,
          email: commentData.email,
          body: commentData.description
        },
        /// Copiamos os valores/estados anteriores do Array
        ...comments,
      ])
    }
  }

  /// NOTA DO PROFESSOR: A mesa não pede que o formulário seja validado
  const formValidator = () => {
    if (commentTitle && commentEmail && commentDescription) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }

  return (
    <>

      {/* FORMULÁRIO DA PÁGINA */}

      <h1 style={{
        color: "#8b0b7aea"
      }}>Escreva seu comentário</h1>

      <form className='form'>
        <div>
          <label style={{ color: "#8b0b7aea" }}>Título</label>
          <br />
          <input
            type="text"
            value={commentTitle}
            onChange={e => setCommentTitle(e.target.value)}
            onKeyUp={formValidator}
          />
        </div>

        <div>
          <label style={{ color: "#8b0b7aea" }}>E-mail</label>
          <br />
          <input
            type="email"
            value={commentEmail}
            onChange={e => setCommentEmail(e.target.value)}
            onKeyUp={formValidator}
          />
        </div>

        <div>
          <label style={{ color: "#8b0b7aea" }}>Descrição</label>
          <br />
          <textarea
            type="text"
            value={commentDescription}
            onChange={e => setCommentDescription(e.target.value)}
            onKeyUp={formValidator}
            rows="5"
            cols="30"
          />
        </div>

        {newCommentMessageError ? <h3>{newCommentMessageError}</h3> : <></>}

        <button
          onClick={handleCreateNewComment}
          disabled={!formIsValid}
        >Enviar</button>
      </form>


      {/* LISTA DE COMENTÁRIOS DA PÁGINA */}

      <h1 style={{
        color: "#8b0b7aea"
      }}>Comentários</h1>

      {commentsMessageError ? <h3>{commentsMessageError}</h3> : <></>}

      {
        !commentsIsLoading ?
          <div style={
            {
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gridGap: "0.5rem"
            }
          }>
            {
              comments.map(comment => {
                return (
                  <CommentComponent
                    key={comment.id}
                    id={comment.id}
                    title={comment.name}
                    comment={comment.body}
                    email={comment.email}
                  />
                )
              })
            }

          </div>

          : <h3>Buscando comentários...</h3>
      }
    </>
  )
}

export default App;