import { Routes, Route, Link } from "react-router-dom";

import ClickExample from "./components/ClickExample";
import Day1 from "./pages/Day1";
import Day2 from "./pages/Day2";

function App() {
  return (
    <div>
      <h1>React Learning</h1>

      <nav>
        <Link to="/day1">Day 1</Link>
        <br />
        <Link to="/day2">Day 2</Link>
      </nav>
      <Routes>
        <Route path="/day1" element={<Day1 />} />
        <Route path="/day2" element={<Day2 />} />
      </Routes>

      <h2>Click</h2>
      <ClickExample />
    </div>
  );
}

export default App;
