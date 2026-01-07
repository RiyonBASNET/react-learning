import ClickExample from "./components/ClickExample";
import NameList from "./components/NameList";
import Day1 from "./pages/Day1";
import Day2 from "./pages/Day2";

function App() {
  return (
    <div>
      <h1>React Learning</h1>

      <Day1 />

      <h2>Click</h2>
      <ClickExample />

      <Day2 />
    </div>
  );
}

export default App;
