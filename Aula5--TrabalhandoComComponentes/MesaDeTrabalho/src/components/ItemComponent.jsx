import styles from "./ItemComponent.module.css";

function ItemComponent({nome, image, preco}) {
    return (
        <li className={styles.h1}>
            <h2>{nome}</h2>
            <img src={image} className={styles.img} />
            <h3 className={styles.h3}>{preco}</h3>
        </li>
    );
}

export default ItemComponent;