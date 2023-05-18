import style from "./ButtonComponent.module.css";

function ButtonComponent({ description, fn }) {
    return (
        <button
            className={style.btn}
            onClick={fn}>
            {description}
        </button>
    );
}

export default ButtonComponent;