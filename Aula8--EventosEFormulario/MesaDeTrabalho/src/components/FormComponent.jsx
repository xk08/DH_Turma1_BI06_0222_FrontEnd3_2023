import { useState } from "react";
import style from "./FormComponent.module.css";
import InputComponent from "./InputComponent";
import CardComponent from "./CardComponent";

function FormComponent() {

    /* Variáveis que controlam os estados do formulário */
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [pokemon, setPokemon] = useState("");
    const [imageUrlPokemon, setImageUrlPokemon] = useState("");
    const [user, setUser] = useState({});
    const [formIsValid, setformIsValid] = useState(false);

    /* Funções que atualizam os estados dos elementos do formulário */
    const handleNameChange = (event) => {
        setName(normalizeInputData(event.target.value));
    }
    const handleAgeChange = (event) => {
        setAge(normalizeInputData(event.target.value));
    }

    const handlePokemonChange = (event) => {
        setPokemon(normalizeInputData(event.target.value));
    }

    const handleImageUrlPokemonChange = (event) => {
        setImageUrlPokemon(normalizeInputData(event.target.value));
    }

    const handleClickButton = (event) => {
        event.preventDefault();
        if (formIsValid) {
            setUser(
                {
                    name: name,
                    age: age,
                    pokemon: pokemon,
                    imageUrlPokemon: imageUrlPokemon,
                }
            );

            /// Limpando os campos do formulário
            setName("");
            setAge("");
            setPokemon("");
            setImageUrlPokemon("");
            setformIsValid(false);
        }
    }

    /* Funções para validação do formulário */
    const formValidation = () => {
        /* Nota do professor: 
            Esta função é chamada de forma recorrente pelo evento "onKeyUp" do componente "InputComponent",
            Assim, toda vez que uma tecla é pressionada, a função é chamada (e executa a validação). 
            Isso faz com que a validação aconteça em tempo real e o estado do formulário seja 100% reativo.
        */
        if (name.length >= 3 && age.length >= 1 && pokemon.length >= 2 && imageUrlPokemon.length > 0) {
            setformIsValid(true);
        } else {
            setformIsValid(false);
        }
    }

    /* Função que retira os espaços em branco do valor do input - Normalização */
    const normalizeInputData = (data) => data.trim();

    return (
        <>
            {/* EXTRA: A atividade do PG não exige que um card seja criado, ou, que a informação do formulário seja exibida em tela*/}
            {/* Card com os dados do formulário */}
            <CardComponent
                {...user}
            />

            {/* Card com os campos do formulário */}
            <div className={style.container}>
                <InputComponent
                    label="Seu nome"
                    type="text"
                    value={name}
                    fnOnChnage={handleNameChange}
                    fnOnKeyUp={formValidation}
                />

                <InputComponent
                    label="Sua idade"
                    type="number"
                    value={age}
                    fnOnChnage={handleAgeChange}
                    fnOnKeyUp={formValidation}
                />

                <InputComponent
                    label="Seu pokemon favorito"
                    type="text"
                    value={pokemon}
                    fnOnChnage={handlePokemonChange}
                    fnOnKeyUp={formValidation}
                />

                <InputComponent
                    label="Imagem URL do pokemon"
                    type="url"
                    value={imageUrlPokemon}
                    fnOnChnage={handleImageUrlPokemonChange}
                    fnOnKeyUp={formValidation}
                />

                <button
                    onClick={handleClickButton}
                    disabled={!formIsValid}
                >Registrar</button>
            </div>
        </>
    );
}

export default FormComponent;