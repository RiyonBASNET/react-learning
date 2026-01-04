import { useState } from "react";

function TodoApp() {
  const [todos, setTodo] = useState([]);
  const [text, setText] = useState("");

  function addTodo() {
    if (text.trim() == "") return;

    setTodo([...todos, text]);
    setText("");
  }

  function removeTodo(index) {
    setTodo(todos.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h2>Todo App</h2>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter Todo"
      />

      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => removeTodo(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
