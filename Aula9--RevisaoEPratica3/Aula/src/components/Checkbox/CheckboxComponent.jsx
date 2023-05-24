import style from "./CheckboxComponent.module.css";

function CheckboxComponent() {
    return (
        <>
            <input
                type="checkbox"
                checked={true}
                className={style.checkbox}
            />
            <label>É meu Pokémon favorito</label>
            <p>Checkbox(interno): {"Sim"}</p>
        </>
    );
}

export default CheckboxComponent;