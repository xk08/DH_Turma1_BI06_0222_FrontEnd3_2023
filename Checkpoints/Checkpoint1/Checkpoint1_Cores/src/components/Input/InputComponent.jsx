import style from "./InputComponent.module.css";

function InputComponent({ description, type, value, fnOnChange, fnOnKeyUp, placeholder }) {
    return (
        <div className={style.input}>

            <label>{description}</label>
            <br />
            <input
                className={style.input}
                type={type}
                value={value}
                onChange={fnOnChange}
                onKeyUp={fnOnKeyUp}
                placeholder={placeholder ?? "Indefinido"}
                style={{
                    backgroundColor: "#8D8989",
                    color: "whitesmoke",
                    height: "25px",
                }}
            />

        </div>
    );
}

export default InputComponent;