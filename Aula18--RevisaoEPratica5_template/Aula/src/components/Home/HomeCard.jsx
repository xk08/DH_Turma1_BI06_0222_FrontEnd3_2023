import { useNavigate } from "react-router-dom";

function HomeCard({ hotel }) {

    const navigate = useNavigate();

    const handleRedirectToDetailsPage = (id) => {
        navigate(`/details/${id}`)
    }

    return (

        <div
            style={
                {
                    border: "6px solid #644F7A",
                    borderRadius: "5%",
                    alignItems: "center",
                    flexDirection: "column",
                    width: "350px",
                    height: "400px",
                    transition: "all ease 0.3s",
                    cursor: "pointer",
                    padding: "0.5rem",
                    marginRight: "15px",
                    marginLeft: "15px",
                    marginTop: "15px",
                    marginBottom: "15px",
                }
            }
        >
            <img
                src={hotel.img}
                alt={hotel.name}
                style={
                    {
                        width: "90%",
                        height: "60%",
                        borderRadius: "5%",
                    }
                }
            />
            <div className="title">{hotel.name}</div>
            <div className="description">{hotel.city}</div>
            <div className="description-stars">{hotel.stars} estrelas</div>
            <button
                onClick={() => handleRedirectToDetailsPage(hotel.id)}
                style={{ margin: "2%" }}>Ver mais
            </button>
        </div>

    );
}

export default HomeCard;