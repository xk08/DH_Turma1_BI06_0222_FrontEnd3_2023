function InputComponent({label, type}) {
    return (
        <>
            <label htmlFor={label}>{label ?? "Indefinido"}</label>
            <input type={type} />
        </>
    );
}

export default InputComponent;