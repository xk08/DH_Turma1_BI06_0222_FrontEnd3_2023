import { useState } from 'react';

function ButtonStateComponent() {
    /* 
        /// Primeira Parte - Dinâmica antiga, alterando no DOM diretamente
        
        let clicks = 0
    
        const contadorDeClicks = () => {
            console.log("usuário clicou");
            clicks = clicks + 1;
            console.log(clicks);
            document.getElementById("clicks").innerText = `Número de clicks: ${clicks}`
        } */

    /// Segunda Parte - Utilizando Hooks - useState() para fazer a manipulação e controle

    /// Definimos a variável + função de atualização
    const [clicks, setSetClicks] = useState(0);


    const contadorDeClicks = () => {
        console.log("usuário clicou");
        setSetClicks(clicks + 1) /// Função que atualiza o estado de "Clicks"
    }

    return (
        <>
            <h4 id="clicks">Número de clicks: {clicks}</h4>
            <button onClick={contadorDeClicks}>Clique aqui</button>
        </>
    );
}

export default ButtonStateComponent;