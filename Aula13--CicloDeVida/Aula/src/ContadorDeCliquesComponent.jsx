import { useState, useEffect } from "react";

function ContadorDeCliquesCompoent() {

    const [cliques, setCliques] = useState(0);

    useEffect(
        () => {
            console.log("<ContadorDeCliquesCompoent/> Foi Montado");

            alert(`Clicou ${cliques} vezes no botão`)
            document.title = `Clicou ${cliques} vezes`

            return function limpaComponente() {
                console.log("<ContadorDeCliquesCompoent/> Foi Desmontado/Limpo");
            }

        }, [cliques]
    )

    return (
        <>
            <h2>Clicou {cliques} vezes no botão</h2>
            <button onClick={() => setCliques(cliques + 1)}>Clique aqui</button>
        </>
    );
}

export default ContadorDeCliquesCompoent;