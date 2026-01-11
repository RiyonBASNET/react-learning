import { Routes, Route, Link } from "react-router-dom";

import Day1 from "./pages/Day1";
import Day2 from "./pages/Day2";
import Day3 from "./pages/Day3";
import Day4 from "./pages/Day4";
import Day5 from "./pages/Day5";

function App() {
  return (
    <div>
      <h1>React Learning</h1>

      <nav>
        <Link to="/day1">Day 1</Link> <br />
        <Link to="/day2">Day 2</Link> <br />
        <Link to="/day3">Day 3</Link> <br />
        <Link to="/day4">Day 4</Link> <br />
        <Link to="/day5">Day 5</Link> <br />
      </nav>
      <Routes>
        <Route path="/day1" element={<Day1 />} />
        <Route path="/day2" element={<Day2 />} />
        <Route path="/day3" element={<Day3 />} />
        <Route path="/day4" element={<Day4 />} />
        <Route path="/day5" element={<Day5 />} />
      </Routes>
    </div>
  );
}

export default App;
