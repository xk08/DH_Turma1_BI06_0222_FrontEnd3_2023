import { useEffect, useState } from 'react';
import axios from "axios";
import apiBaseUrl from "../api";

import { useParams, useNavigate } from 'react-router-dom';

const Character = () => {

  const [character, setCharacter] = useState(undefined);

  const params = useParams();
  const navigate = useNavigate();

  const characterNameParam = params.name;

  const getCharacter = async () => {
    const res = await axios(`${apiBaseUrl}/character/?name=${characterNameParam}`)
    setCharacter(res.data.results[0]);
  }

  useEffect(() => {
    console.log("<Character /> executou efeito colateral");
    getCharacter();
    return function unmount() {
      console.log(console.log("<Character /> desmontou"));
    }
  }, []);

  return (

    <>
      <h1>Personagem selecionado</h1>
      {
        character ?
          <div style={{
            margin: "2%",
            backgroundColor: "#8A6DF178",
            borderRadius: "5%",
            border: "2px solid #8a6df1",
            padding: "2%",
            marginTop: "2%",
            marginBottom: "2%"
          }}>
            <h1>{character.name}</h1>
            <img src={character.image} />

            <br />
            <button onClick={() => navigate(-1)}>{"< voltar"}</button>
            <br />
            <button onClick={() => navigate("/")}>Votar ao início</button>

          </div>
          : <h2>O personagem {characterNameParam} não foi encontrado</h2>
      }
    </>

  )
}

export default Character;