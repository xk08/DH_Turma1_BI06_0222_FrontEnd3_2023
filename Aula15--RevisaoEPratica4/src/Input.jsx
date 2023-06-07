import { useEffect } from "react";

function Input({ title, type, value, fnOnChange, fnOnKeyUp }) {

    useEffect(() => {
        console.log("<Input/> foi Montado");
    }, []);

    return (
        <div>
            <label htmlFor="">{title ?? "indefinido"}</label>
            <br />
            <input
                type={type ?? "text"}
                value={value}
                onChange={fnOnChange}
                onKeyUp={fnOnKeyUp}
            />

        </div>
    );
}

export default Input;