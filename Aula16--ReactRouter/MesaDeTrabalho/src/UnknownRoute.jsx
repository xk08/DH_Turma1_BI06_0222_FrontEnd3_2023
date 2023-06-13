import { useNavigate } from 'react-router-dom';

function UnknownRoute() {

    const navigate = useNavigate();

    return (
        <div>
            <h1 style={{ fontSize: "200px" }}>404</h1>
            <h1 style={{ fontSize: "30px" }}>Recurso não encontrado!</h1>
            <p style={{ textAlign: "center" }}>
                <button style={{
                    color: "rgb(255, 198, 75)"
                }} onClick={() => navigate("/home")}>Voltar para o início </button>
            </p>
        </div>

    );
}

export default UnknownRoute;