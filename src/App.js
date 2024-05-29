import React, {useState} from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = (event) => {
    event.preventDefault();
    const todo = newTodo.trim();

    if (todo){
      setTodos([...todos, { text: todo, completed: false }]);
      setNewTodo("");
    }
    
  }

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  }

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (  
    <div className="App">
      <h1>Todo App</h1>

      <form onSubmit={addTodo}>
        <input
          type="text"
          value={newTodo}
          Placeholder="Enter a new todo"
          onChange={(event) => setNewTodo(event.target.value)}
        />
        <button type="submit">Add Todo</button>
        </form>

        <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

function TodoList({todos, toggleTodo, deleteTodo}) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem
        key={index}
        todo={todo}
        toggleTodo={() => toggleTodo(index)}
        deleteTodo={() => deleteTodo(index)}
         />
      ))}
    </ul>
  );
}

function TodoItem({todo, toggleTodo, deleteTodo}) {
  return (
    <li className={todo.completed ? 'completed' : ''}>
      <input 
        type="checkbox"
        checked={todo.completed}
        onChange={toggleTodo} 
      />

      <span> {todo.text} </span>

      <button onClick={deleteTodo}>Delete</button>
    </li>
  )
}

export default App;