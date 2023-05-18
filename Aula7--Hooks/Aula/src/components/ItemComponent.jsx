import styles from "./ItemComponent.module.css";

function ItemComponent({ bimestre, ano, disciplinas }) {
    return (
        <div className={styles.div}>
            <h1>Bimestre {bimestre} - Ano {ano}</h1>
            <h3 className={styles.h3} style={{ color: "#a31b98" }}>Disciplinas</h3>
            {
                disciplinas.map(disciplina => {
                    return (
                        <li key={disciplina}>{disciplina}</li>
                    )
                })
            }
        </div>
    );
}

export default ItemComponent;