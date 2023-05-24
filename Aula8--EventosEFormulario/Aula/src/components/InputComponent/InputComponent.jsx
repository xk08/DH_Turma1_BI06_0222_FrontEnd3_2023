import style from "./InputComponent.module.css";

function InputComponent({ label, type, value, fnOnChange, fnOnKeyUp }) {
    return (
        <div className={style.input}>
            <label>{label}</label>
            <br />
            <input
                type={type}
                value={value}
                onChange={fnOnChange}
                onKeyUp={fnOnKeyUp}
            />
        </div>

    );
}

export default InputComponent;