function ButtonComponent({ label, fnOnClick }) {
    return (
        <button
            onClick={fnOnClick}
        >{label}</button>
    );
}

export default ButtonComponent;