import Hello from "./components/Hello";
import Welcome from "./components/Welcome";

import Counter from "./components/Counter";
import ClickExample from "./components/ClickExample";
import NameList from "./components/NameList";
import TodoApp from "./components/TodoApp";

function App() {
  return (
    <div>
      <h1>React Learning</h1>
      <Hello />
      <Welcome name="Mee" />
      <h2>Counter</h2>
      <Counter />

      <h2>Click</h2>
      <ClickExample />

      <h2>List</h2>
      <NameList />

      <h2>TODO</h2>
      <TodoApp />
    </div>
  );
}

export default App;
