import style from "./ItemComponent.module.css";

function ItemComponent({ descricao }) {
    return (
        <div className={style.div}>
            <h4>{descricao}</h4>
        </div>);
}

export default ItemComponent;