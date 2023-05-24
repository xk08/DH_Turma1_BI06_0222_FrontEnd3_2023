import style from "./InputComponent.module.css";

function InputComponent({ label, type, value, fnOnChnage, fnOnKeyUp }) {
    return (
        <div className={style.div}>
            <label>{label}</label>
            <br/>
            <input
                type={type}
                value={value}
                onChange={fnOnChnage}
                onKeyUp={fnOnKeyUp}
            />
        </div>
    );
}

export default InputComponent;