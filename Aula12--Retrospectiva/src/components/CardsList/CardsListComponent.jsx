import style from "./CardsListComponent.module.css";
import CardComponent from "../Card/CardComponent";

function CardsListComponent({ cards }) {
    return (
        <div className={style.div}>
            {
                cards.length > 0 ?
                    cards.map(card => {
                        return (
                            <CardComponent
                                key={card.title}
                                title={card.title}
                                img={card.imageUrl}
                            />
                        )
                    })
                    : <CardComponent />
            }
        </div>
    );
}

export default CardsListComponent;