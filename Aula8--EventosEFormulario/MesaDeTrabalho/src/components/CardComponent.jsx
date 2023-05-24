import style from "./CardComponent.module.css";

function CardComponent({name, age, imageUrlPokemon, pokemon }) {

    const imageUrlDefault = "https://cdn.vox-cdn.com/thumbor/-famZFxgMFo2h1HQ5UjIIcBszrI=/0x0:1920x1080/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/53254027/who_pokemon.0.jpg";
    return (
        <div className={style.container}>
            <h2>Seu nome: {name ?? "Não informado"}</h2>
            <h4>Sua idade: {age ?? "Não informada"}</h4>
            <img
                src={imageUrlPokemon ?? imageUrlDefault}
                alt="pokemon image"
                className={style.img}
            />
            <h4>Seu pokemon preferido: {pokemon ?? "Não informado"}</h4>
        </div>
    );
}

export default CardComponent;