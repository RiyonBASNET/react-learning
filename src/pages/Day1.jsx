import Counter from "../components/Counter";
import Hello from "../components/Hello";
import Welcome from "../components/Welcome";

function Day1() {
  return (
    <div>
      <h1>Day 1</h1>
      <Hello />
      <Welcome name="Mee" />
      <h2>Counter</h2>
      <Counter />
    </div>
  );
}

export default Day1;
