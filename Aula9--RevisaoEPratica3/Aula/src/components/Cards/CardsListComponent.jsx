import style from "./CardsListComponent.module.css";

function CardsListComponent(props) {
    return (
        <div className={style.wrapper}>
            {props.children}
        </div>
    );
}

export default CardsListComponent;