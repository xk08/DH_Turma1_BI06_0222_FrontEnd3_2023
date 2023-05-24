import style from "../Form/FormComponent.module.css";
import CardComponent from "../Cards/CardComponent";
import InputComponent from "../Input/InputComponent";
import CheckboxComponent from "../Checkbox/CheckboxComponent";
import { useState } from "react";

function FormComponent() {

    /// Definindo os estados dos elementos do formulário
    const [pokemonName, setPokemonName] = useState("");
    const [pokemonImageUrl, setPokemonImageUrl] = useState("");
    const [pokemon, setPokemon] = useState({});
    const [formIsValid, setFormIsValid] = useState(false);

    /// Funções que atualizam os estados do formulário
    const handleChangePokemonName = (event) => {
        setPokemonName(event.target.value);
        formValidator(); /// TODO: Ver outra forma de fazer em tempo real
    }

    const handleChangePokemonImageUrl = (event) => {
        setPokemonImageUrl(event.target.value);
        formValidator();
    }

    const handleButtonClick = () => {
        setPokemon(
            {
                name: pokemonName,
                image: pokemonImageUrl
            }
        )
        /// Limpando os valores do input
        setPokemonName("");
        setPokemonImageUrl("");
        setFormIsValid(false);
    }

    /// Função que valida os campos do formulário
    const formValidator = () => {
        if (pokemonName.length >= 2 && pokemonImageUrl.length > 0) {
            setFormIsValid(true);
        } else {
            setFormIsValid(false);
        }
    }

    return (
        <>
            {/* Card com os dados do formulário */}
            <CardComponent
                name={pokemon.name}
                imageUrl={pokemon.image}
            />

            {/* Card com os campos do formulário */}
            <div className={style.container}>

                <InputComponent
                    label="Seu Pokémon preferido"
                    type="text"
                    value={pokemonName}
                    fnOnChange={handleChangePokemonName}
                />

                <InputComponent
                    label="Imagem URL do Pokémon"
                    type="url"
                    value={pokemonImageUrl}
                    fnOnChange={handleChangePokemonImageUrl}
                />

                <CheckboxComponent />

                <p>Checkbox(externo): {"Não"}</p>

                <button
                    onClick={handleButtonClick}
                    disabled={!formIsValid}
                >Salvar</button>
            </div>
        </>
    );
}

export default FormComponent;