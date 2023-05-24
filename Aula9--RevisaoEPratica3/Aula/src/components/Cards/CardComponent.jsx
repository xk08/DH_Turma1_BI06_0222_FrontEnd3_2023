import style from "./CardComponent.module.css";

function CardComponent({name, imageUrl}) {

    const imageUrlDefault = "https://cdn.vox-cdn.com/thumbor/-famZFxgMFo2h1HQ5UjIIcBszrI=/0x0:1920x1080/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/53254027/who_pokemon.0.jpg";
    return (
        <div className={style.container}>
            <div className={style.title}>{name ?? "Não informado"}</div>
            <div className={style.subtitle}>É seu Pokémon preferido</div>
            <img
                src={imageUrl ?? imageUrlDefault}
                alt="pokémon-image"
                className={style.img}
            />
        </div>
    );
}

export default CardComponent;