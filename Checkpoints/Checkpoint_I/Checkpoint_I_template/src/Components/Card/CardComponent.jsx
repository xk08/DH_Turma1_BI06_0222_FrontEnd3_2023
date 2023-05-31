import style from "./CardComponent.module.css";

function CardComponent(props) {

    const imgUrlDefault = "https://sm.ign.com/ign_br/screenshot/default/naruto-shippuden_zy11.jpg";

    return (
        <div className={style.div}>
            <h2 className={style.title}>{props.title ?? "Indefinido"}</h2>
            <img className={style.img} src={props.imgUrl ?? imgUrlDefault} alt="img" />
        </div>
    );
}

export default CardComponent;