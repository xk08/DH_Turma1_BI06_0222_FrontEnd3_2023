import style from "../Form/FormComponent.module.css";
import CardComponent from "../Card/CardComponent";

function FormComponent() {

    return (
        <>
            {/* Card com os dados do formulário */}
            <CardComponent />

            {/* Card com os campos do formulário */}
            <div className={[style.container, style.input].join(" ")}> {/* Maneira de adicionar +1 classe ao className */}

                <div>
                    <label>Seu Pokémon preferido</label>
                    <br />
                    <input
                        type="text"
                        value="Charmander" />
                </div>

                <br />

                <div>
                    <label>Imagem URL do Pokémon</label>
                    <br />
                    <input
                        type="url"
                        value="https://" />
                </div>

                <br />

                <button>Salvar</button>
            </div>
        </>
    );
}

export default FormComponent;