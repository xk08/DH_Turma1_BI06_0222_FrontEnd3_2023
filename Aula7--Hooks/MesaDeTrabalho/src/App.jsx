/* 
Digital House Brasil
- Front end III (ReactJS)
- Possível solução para a Mesa de Trabalho "Aula 7: Mesa de trabalho" 
- Prof: Marcos V. Martins
*/

import './App.css';
import ItemComponent from "./components/ItemComponent";
import { useState } from 'react';

function App() {

  /// Gerenciando o estado da lista, através do hook useState()
  const [itens, setItens] = useState([]);

  const handleButtonAddElement = () => {

    /// Precisamos 'manter' os itens anteriores, e adicionar +1 um elemento a lista

    const copyItemsList = [...itens]; /// Copiamos o estado mais recente da lista, antes de adicionar o novo elemento
    copyItemsList.push(`O item ${itens.length + 1} foi adicionado à lista`); /// Adicionamos o novo elemento
    setItens(copyItemsList) /// Atualizamos o novo estado da lista (usando o objeto de cópia)

    /* 
    /// Outras formas de atualizar o estado da lista:

    setItens(
      /// 1ª possibilidade:
      // itens.concat(`O item ${itens.length + 1} foi adicionado à lista`),

      /// 2ª possibilidade:
      [
        ...itens, // Copia os elementos da lista
        `O item ${itens.length + 1} foi adicionado à lista` // Novo elemento que será adicionado
      ]
    ) */

  }

  /* Extra: A atividade desta aula não exige que os itens sejam removidos ao clicar no botão */
  const handleButtonRemoveElement = () => {
    const copyItemsList = [...itens]; /// Copiamos o estado mais recente da lista, antes de remover o elemento que desejamos
    copyItemsList.splice(-1); /// Removemos o último elemento da lista
    setItens(copyItemsList) /// Setamos o novo estado da lista (usando o objeto de cópia)
  }

  return (
    <>
      <h2>Lista ({itens.length} elementos)</h2>
      {
        itens.length > 0 ? /// Se, a lista não estiver vazia...

          itens.map((descricao) => {
            return <ItemComponent
              key={descricao}
              descricao={descricao}
            />
          })
          : /// Se não, a lista está vazia...
          <h4>A lista está vazia no momento</h4>
      }
      <button
        onClick={handleButtonAddElement}>
        (+) Adicionar Item
      </button>

      <button
        onClick={handleButtonRemoveElement}
        disabled={itens.length == 0} ///Se, a lista estiver vazia, desabilita o botão
      >
        (-) Remover Item
      </button>
    </>
  )
}

export default App