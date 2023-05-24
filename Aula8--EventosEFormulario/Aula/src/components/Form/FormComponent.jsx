import style from "../Form/FormComponent.module.css";
import CardComponent from "../Card/CardComponent";
import InputComponent from "../InputComponent/InputComponent";
import { useState } from "react";


function FormComponent() {

    /// Criando os estados e funções que os atualizam
    const [pokemonName, setPokemonName] = useState("");
    const [pokemonImgUrl, setPokemonImgUrl] = useState("");
    const [pokemonAttack, setPokemonAttack] = useState(0);
    const [pokemon, setPokemon] = useState({});

    /// Estado do formulário
    const [isFormValid, setIsFormValid] = useState(false);


    const handleChangePokemonName = (event) => {
        console.log(event.target.value);
        setPokemonName(event.target.value);
        //formValidator(); /// Retirado

        /* 
            A função de validação (formValidator) agora é chamada pelo evento de click do teclado no Input (
        */
    }

    const handleChangePokemonImgUrl = (event) => {
        console.log(event.target.value);
        setPokemonImgUrl(event.target.value);
        //formValidator();
    }

    const handleChangePokemonAttack = (event) => {
        console.log(event.target.value);
        setPokemonAttack(event.target.value);
    }


    const formValidator = () => {
        ///Validando os Imputs no Form
        if (pokemonName.length >= 3 && pokemonImgUrl.length >= 1) {
            setIsFormValid(true);
        } else {
            setIsFormValid(false);
        }
    }

    const handleClickButton = () => {
        setPokemon(
            {
                pokemonName: pokemonName,
                pokemonImgUrl: pokemonImgUrl,
                pokemonAttack: pokemonAttack
            }
        )

        /// Limpando campos do form (estados do form)
        setPokemonName("");
        setPokemonImgUrl("");
        setPokemonAttack(0);
        setIsFormValid(false); /// Retorna o estado do form/botão para inválido
    }

    return (
        <>
            {/* Card com os dados do formulário */}
            <CardComponent
                title={pokemon.pokemonName}
                imgUrl={pokemon.pokemonImgUrl}
                attack={pokemon.pokemonAttack}
            />

            {/* Card com os campos do formulário */}
            <div className={[style.container, style.input].join(" ")}> {/* Maneira de adicionar +1 classe ao className */}

                <InputComponent
                    label="Seu Pokémon preferido"
                    value={pokemonName}
                    type="text"
                    fnOnChange={handleChangePokemonName}
                    fnOnKeyUp={formValidator}
                />

                <InputComponent
                    label="Imagem URL do Pokémon"
                    value={pokemonImgUrl}
                    type="url"
                    fnOnChange={handleChangePokemonImgUrl}
                    fnOnKeyUp={formValidator}
                />

                <InputComponent
                    label="Ataque"
                    value={pokemonAttack}
                    type="number"
                    fnOnChange={handleChangePokemonAttack}
                />

                <br />

                <button
                    onClick={handleClickButton}
                    disabled={!isFormValid}
                >Salvar</button>
            </div>
        </>
    );


}

export default FormComponent;