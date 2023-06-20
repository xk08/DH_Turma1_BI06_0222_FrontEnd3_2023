import './App.css';
import { useState, useEffect } from 'react';


function App() {

  const [newTodo, setNewTodo] = useState("");

  /// Trocamos o useState() pelo useReducer()
  const [todos, setTodos] = useState(
    [
      {
        id: 2354345345,
        text: "Aprender useReducer"
      }
    ]
  );

  useEffect(() => {

    /// Buscamos se existe algum dado no Storage

    /// Salvamos o novo estado da lista após buscar no Storage (se existir algo)

  }, []); // Executamos 1x ao montar o componente <App />


  useEffect(() => {
    /// Precisamos manter o Storage sempre atualizado
  }, []);

  const handleNewTodo = () => {
    if (newTodo.trim() !== '') {

      const todo = {
        id: Date.now(),/// Forma de gerar uma chave aleátoria
        text: newTodo
      };

      console.log(todo);

      /// Salvamos o novo item na Lista de tarefas

      setNewTodo("");

    } else {
      alert("Necessário informar alguma descrição");
    }
  };

  const handleRemoveTodo = (id) => {
    console.log(id);
    /// Removemos o item selecionado da lista de Tarefas
  };


  return (
    <div className='card'>

      <h1>Lista de Tarefas</h1>

      <input
        type="text"
        value={newTodo}
        onChange={event => setNewTodo(event.target.value)}
      />

      <button onClick={handleNewTodo}>Adicionar Tarefa</button>

      {
        todos.length > 0 ?
          todos.map(todo => (
            <div className='divTodo' key={todo.id}>

              <div className='divText'>
                {todo.text}
              </div>

              <button style={{
                backgroundColor: "#8a6df1",
                color: "#2F2D2D"
              }} onClick={() => handleRemoveTodo(todo.id)}>Remover
              </button>

            </div>
          ))
          : <h3>A lista de tarefas está vazia</h3>
      }

    </div>
  );
}

export default App;