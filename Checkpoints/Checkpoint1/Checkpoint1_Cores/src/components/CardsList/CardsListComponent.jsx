import style from "./CardsListComponent.module.css";

function CardsListComponent(props) {
    return (
        <div className={style.div}>
            {props.children}
        </div>
    );
}

export default CardsListComponent;