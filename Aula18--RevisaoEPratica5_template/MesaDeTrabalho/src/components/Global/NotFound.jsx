import { useNavigate } from "react-router-dom";

function NotFound() {

    const navigate = useNavigate();

    return (

        <div style={
            {
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                transition: "all ease 0.3s",
                cursor: "pointer"
            }
        }>
            <div className="title-details">Ops! Ocorreu algum erro :X </div>

            <img
                src="https://cdn-icons-png.flaticon.com/512/6733/6733337.png"
                alt="Not Found"
                style={
                    {
                        width: "60%",
                        borderRadius: "5%",
                        border: "5px solid #F7F6F9",
                    }
                }
            />

            <div className="description-details-title">Página não encontrada!</div>

            <button
                style={{ margin: "3%" }}
                onClick={() => navigate("/")}>Voltar ao início
            </button>

        </div>
    );
}

export default NotFound;