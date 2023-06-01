import style from "./InputComponent.module.css";

function InputComponent({ description, type, value, fnOnChange }) {
    return (
        <div className={style.input}>
            <label>{description}</label>
            <br />
            <input
                className={style.input}
                type={type}
                value={value}
                onChange={fnOnChange}
            />
        </div>

    );
}

export default InputComponent;