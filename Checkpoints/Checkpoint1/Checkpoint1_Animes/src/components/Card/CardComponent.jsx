import style from "./CardComponent.module.css";


function CardComponent({ title, img }) {

    const imgUrlDefault = "https://media.istockphoto.com/id/1255635032/pt/vetorial/doodle-sketch-question-marks-set-inside-speech-bubbles.jpg?s=612x612&w=0&k=20&c=P6g9ksoWHuyRzfe8yEwhqio1jzbODJZMfW5WHoAAG20=";

    return (

        <div className={style.div}>
            <div className={style.title}>{title ?? "Indefinido"}</div>
            <img
                src={img ?? imgUrlDefault}
                alt="photo"
                className={style.img}
            />
        </div>

    );
}

export default CardComponent;