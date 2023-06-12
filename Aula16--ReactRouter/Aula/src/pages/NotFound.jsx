import { useEffect } from 'react';

function NotFound() {

    useEffect(
        () => {
            console.log("<NotFound /> executou efeito colateral");
            return function unmount() {
                console.log(console.log("<Locations /> desmontou"));
            }
        }, []
    );

    return (
        <div style={{
            margin: "2%",
            backgroundColor: "#8A6DF178",
            borderRadius: "5%",
            border: "2px solid #8a6df1",
            padding: "2%",
            marginTop: "2%",
            marginBottom: "2%",
            minHeight: "250px",
            alignContent: "center",
            display: "grid",
        }}>
            <h1>Erro 404</h1>
            <h1 style={{ fontSize: "30px", color: "rgb(56, 55, 55)" }}>Página não encontrada :X</h1>
            <p style={{ textAlign: "center", color: "whitesmoke" }}>
                <button onClick={() => { }}>Voltar ao início</button>
            </p>
        </div>

    );
}

export default NotFound;