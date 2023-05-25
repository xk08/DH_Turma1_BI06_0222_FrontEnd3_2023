import style from "../Form/FormComponent.module.css";
import CardComponent from "../Cards/CardComponent";
import InputComponent from "../Input/InputComponent";
import CheckboxComponent from "../Checkbox/CheckboxComponent";
import CardsListComponent from "../Cards/CardsListComponent";
import { useState } from "react";

function FormComponent() {

    /// Definindo os estados dos elementos do formulário
    const [pokemonName, setPokemonName] = useState("");
    const [pokemonImageUrl, setPokemonImageUrl] = useState("");
    // const [pokemon, setPokemon] = useState({});
    const [formIsValid, setFormIsValid] = useState(false);

    const [pokemonList, setPokemonList] = useState([]);

    /// Funções que atualizam os estados do formulário
    const handleChangePokemonName = (event) => {
        setPokemonName(event.target.value);
        //formValidator();
    }

    const handleChangePokemonImageUrl = (event) => {
        setPokemonImageUrl(event.target.value);
        //formValidator();
    }

    const handleButtonClick = () => {

        /// Populando o array de pokemon (Atualizando o estado do array)

        /// 1ª forma
        /* const pokemonListTemp = [...pokemonList];
        pokemonListTemp.push(
            {
                name: pokemonName,
                image: pokemonImageUrl
            }
        )
        setPokemonList(pokemonListTemp); */

        /// 2ª forma
        setPokemonList(
            [
                ...pokemonList, /// Capturando o estado anterior do array
                { /// Adicionando o novo elemento
                    name: pokemonName,
                    image: pokemonImageUrl
                }
            ]
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
            <CardsListComponent>
                {
                    pokemonList.map(pokemonCard => {
                        return (
                            <CardComponent
                                key={pokemonCard.name}
                                name={pokemonCard.name}
                                imageUrl={pokemonCard.image}
                            />
                        );
                    })
                }
            </CardsListComponent>


            {/* Card com os campos do formulário */}
            <div className={style.container}>

                <InputComponent
                    label="Seu Pokémon preferido"
                    type="text"
                    value={pokemonName}
                    fnOnChange={handleChangePokemonName}
                    onKeyUp={formValidator}
                />

                <InputComponent
                    label="Imagem URL do Pokémon"
                    type="url"
                    value={pokemonImageUrl}
                    fnOnChange={handleChangePokemonImageUrl}
                    onKeyUp={formValidator}
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