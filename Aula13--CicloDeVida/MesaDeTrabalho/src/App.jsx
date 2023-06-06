/* 
  Digital House Brasil
  - Front end III (ReactJS)
  - Possível solução para a Mesa de Trabalho "Aula 13: Prática Integradora" 
  - Prof: Marcos V. Martins
*/

import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [pedidoStatus, setPedidoStatus] = useState("Ativo");

  useEffect(

    /// Clico de Vida: Função de Update/Atualização
    () => {
      setTimeout(() => {
        console.log("O componente foi atualizado!");
        document.title = pedidoStatus;
      }, 2000);

      /// Clico de Vida: Função de Limpeza/Desmonte
      return function exibeAlertAoCancelarPedido() {
        console.log("O componente foi desmontado");
        alert("Seu pedido foi cancelado");
      };

    },
    ///Array de dependências dos efeitos colaterais
    [pedidoStatus] /// Clico de Vida: Executa 1x o efeito colateral ao montar o componente e todas as vezes que o estado de "pedidoStatus" sofrer alguma alteração
  );

  /// Ao ser clicado, atualiza o status do pedido de "Ativo" para "Cancelado"
  const cancelarPedido = () => {
    setPedidoStatus("Cancelado");
  }

  return (
    <>
      <h2>Status do pedido: {pedidoStatus}</h2>
      <button onClick={cancelarPedido}
      >{pedidoStatus == "Ativo" ? "Cancelar pedido" : "Pedido cancelado"}</button>
    </>
  )
}

export default App