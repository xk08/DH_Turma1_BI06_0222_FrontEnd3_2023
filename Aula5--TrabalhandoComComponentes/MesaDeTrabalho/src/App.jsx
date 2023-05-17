/* 
Digital House Brasil
- Front end III (ReactJS)
- Possível solução para a Mesa de Trabalho "Aula 5: Mesa de trabalho" 
- Prof: Marcos V. Martins
*/

import ItemComponent from "./components/ItemComponent";
import "./styles.css";

const produtos = [
  {
    nome: "Macbook Air 13 Chip M1 256gb",
    image: "https://m.media-amazon.com/images/I/41O807iqbCL._AC_SX522_.jpg",
    preco: "R$ 7999.00",
  },
  {
    nome: "Echo Dot (4ª Geração)",
    image: "https://m.media-amazon.com/images/I/714Rq4k05UL._AC_SL1000_.jpg",
    preco: "R$ 379.00",
  },
  {
    nome: "Câmera Ip Sem Fio 360°",
    image: "https://m.media-amazon.com/images/I/51F70OM213S._AC_SL1000_.jpg",
    preco: "R$ 199.00",
  },
  {
    nome: "Fechadura Eletrônica Digital Inteligente Zigbee",
    image: "https://m.media-amazon.com/images/I/51RXeqMLceL._AC_SL1500_.jpg",
    preco: "R$ 1599.00",
  },
];

function App() {
  return (
    <div>

      {/* Exemplo de CSS Inline */}
      <h1
        style={{ color: "#C35EE8" }}
      >Produtos</h1>

      <ul>
        {
          produtos.map(produto => {
            return (
              <ItemComponent
                key={produto.nome}
                {...produto} /* Forma simplificada de enviar todas as props para o componente */

              /* 
              /// Específicando as props enviadas ao componente
              nome={produto.nome}
              image={produto.image}
              preco={produto.preco} 
              */
              />
            )
          })
        }
      </ul>
    </div>
  );
}

export default App;
