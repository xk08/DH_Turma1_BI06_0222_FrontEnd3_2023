import style from "./InputComponent.module.css";

function InputComponent({ label, type, value, fnOnChange, onKeyUp }) {
    return (
        <div className={style.input}>
            <label>{label ?? "Não informado"}</label>
            <br />
            <input
                type={type}
                value={value}
                onChange={fnOnChange}
                onKeyUp={onKeyUp}
            />
        </div>
    );
}

export default InputComponent;