/* 
Digital House Brasil
  - Front end III (ReactJS)
  - Possível solução para a Mesa de Trabalho "Aula 20: Mesa de trabalho" 
  - Prof: Marcos V. Martins
*/

import './App.css';
import { useEffect, useReducer } from 'react';

const listReducer = (state, action) => {

  /* NOTA: Criamos 2 casos no reducer para manipular o mesmo estado "list"
      - SET_LIST: Recebe um array que representa os itens da lista e atualiza o estado da lista
      - REMOVE_LIST_ITEM: Recebe o id que deve ser verificado e retorna todos os elementos da lista que não possuem este id.
   */

  switch (action.type) {

    case 'SET_LIST':
      return action.payload;

    case 'REMOVE_LIST_ITEM':
      return state.filter(item => item.id !== action.payload);

    default:
      return state;
  }

}

function App() {

  const [list, dispatch] = useReducer(listReducer,

    /// initializerArg: Iniciamos o estado do reducer com a lista de itens
    [
      { id: 1, name: "Primeiro item" },
      { id: 2, name: "Segundo item" },
      { id: 3, name: "Terceiro item" }
    ]
  );

  useEffect(
    () => {
      /* NOTA: Esse useEffect é executado apenas 1x ao montar o componente App.
      Serve para buscar a lista no Storage e exibir em tela (atualizando o estado de 'list' por meio do dispatch) 
      */
      const list = localStorage.getItem('list');

      /// Se não estiver nullo no Storage
      if (list) {

        /// Convertemos de String/Json para objeto literal JS
        const storedList = JSON.parse(list);

        /// Se a lista não estiver vazia
        if (storedList.length > 0) {

          /// Dispatch: Atualizamos o estado de "list" com os conteúdos presentes no LocalStorage
          dispatch({ type: 'SET_LIST', payload: storedList });
        }
      }
    }, []);

  useEffect(() => {

    /// Armazenamos/Atualizamos a lista no LocalStorage sempre que houver alguma alteração no estado de "list"
    /// NOTA: A ação de "remover" um item fará com que o estado de "list" sofra alteração ao clicar no botão
    localStorage.setItem('list', JSON.stringify(list));

  }, [list]);


  function handleRemoveItemFromList(id) {

    // Dispatch: Ação para remover um item da lista (por seu ID)
    dispatch({ type: 'REMOVE_LIST_ITEM', payload: id });
  }

  return (
    <div>
      <h1>Lista</h1>
      <ul>
        {
          list.map(item => (
            <li key={item.id}>
              {item.name}
              <button style={{
                margin: "10px"
              }} onClick={() => handleRemoveItemFromList(item.id)}>Remover</button>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;