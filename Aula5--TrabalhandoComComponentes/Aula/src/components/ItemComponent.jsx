import style from "./ItemComponent.module.css";

function ItemComponent({ bimestre, ano, disciplinas }) {

    const h1 = {
        color: "#0E6A28"
    }

    return (
        <div>
            <h1 style={h1}>Bimestre {bimestre} - Ano {ano}</h1>
            <h3 className={style.h3}>Disciplinas</h3>
            {
                disciplinas.map((disciplina, index) => {
                    return (
                        <p
                            key={index}>
                            {disciplina}
                        </p>
                    )
                })
            }
        </div>
    );
}

export default ItemComponent;