import './App.css';
import { useState, useEffect, useReducer } from 'react';

function App() {

  const [newTodo, setNewTodo] = useState("");

  function todoReducer(state, action) {

    switch (action.type) {

      case "ADD_TODO":
        return action.payload;

      case "DELETE_TODO":
        return state.filter(todo => todo.id != action.payload);

      default:
        return state;
    }

  }

  const [todos, dispatch] = useReducer(todoReducer, [
    {
      id: 2354345345,
      text: "Aprender useReducer"
    }
  ]);

  useEffect(() => {

    const todos = localStorage.getItem("todos");

    if (todos) {

      const todosJS = JSON.parse(todos)

      dispatch(
        {
          type: "ADD_TODO",
          payload: todosJS
        }
      );

    }

  }, []); // Executamos 1x ao montar o componente <App />


  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]); /// Executamos todas as vezes que "todos" sofrer alteração no estado

  const handleNewTodo = () => {
    if (newTodo.trim() !== '') {

      const todo = {
        id: Date.now(),/// Forma de gerar uma chave aleátoria
        text: newTodo
      };

      dispatch(
        {
          type: "ADD_TODO",
          payload: [todo, ...todos]
        }
      );

      setNewTodo("");

    } else {
      alert("Necessário informar alguma descrição");
    }
  };

  const handleRemoveTodo = (id) => {

    dispatch(
      {
        type: "DELETE_TODO",
        payload: id
      }
    )
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