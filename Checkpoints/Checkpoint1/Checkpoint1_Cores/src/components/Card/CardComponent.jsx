import style from "./CardComponent.module.css";

function CardComponent({ name, code }) {
    return (
        <div
            style={{ backgroundColor: code }}  /* Css Inline */
            className={style.div} /* Css Module */
        >
            <div className={style.title}>{name}</div>
            <div className={style.subtitle}>{code ?? "#??????"}</div>
        </div>
    );
}

export default CardComponent;