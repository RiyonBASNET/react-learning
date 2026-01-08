import TodoApp from "../components/TodoApp";
import NameList from "../components/NameList";
import ClickExample from "../components/ClickExample";

function Day2() {
  return (
    <div>
      <h1>Day 2</h1>
      <h2>Click</h2>
      <ClickExample />
      <h2>TODO</h2>
      <TodoApp />
      <h2>List</h2>
      <NameList />
    </div>
  );
}

export default Day2;
