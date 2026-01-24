import { Routes, Route, Link } from "react-router-dom";

import Day1 from "./pages/Day1";
import Day2 from "./pages/Day2";
import Day3 from "./pages/Day3";
import Day4 from "./pages/Day4";
import Day5 from "./pages/Day5";
import Day9 from "./pages/Day9";
import Day10 from "./pages/Day10";
import Day11 from "./pages/Day11";
import Day12 from "./pages/Day12";

function App() {
  return (
    <div>
      <h1>React Learning</h1>

      <nav>
        <Link to="/day1">Day 1</Link> | <Link to="/day2">Day 2</Link> |
        <Link to="/day3">Day 3</Link> | <Link to="/day4">Day 4</Link> |
        <Link to="/day5">Day 5</Link> | <Link to="/day9">Day 9</Link> |
        <Link to="/day10">Day 10</Link> | <Link to="/day11">Day 11</Link> |
        <Link to="/day12">Day 12</Link> | <Link to="/day13">Day 13</Link> |
      </nav>
      <Routes>
        <Route path="/day1" element={<Day1 />} />
        <Route path="/day2" element={<Day2 />} />
        <Route path="/day3" element={<Day3 />} />
        <Route path="/day4" element={<Day4 />} />
        <Route path="/day5" element={<Day5 />} />
        <Route path="/day9" element={<Day9 />} />
        <Route path="/day10" element={<Day10 />} />
        <Route path="/day11" element={<Day11 />} />
        <Route path="/day12" element={<Day12 />} />
      </Routes>
    </div>
  );
}

export default App;
