import { useState } from "react";
import MovieList from "../components/MovieList";

const initialMovies = [
  { id: 1, title: "Inception", year: 2010 },
  { id: 2, title: "Interstellar", year: 2014 },
  { id: 3, title: "Dune", year: 2021 },
  { id: 4, title: "Deadpool", year: 2016 },
];
function Day5() {
  const [movies, setMovies] = useState(initialMovies);

  return (
    <div>
      <h1>Day 5 (Mini Project)</h1>
      <h2>Movie Library(List Viewer)</h2>
      <MovieList movies={movies} />
    </div>
  );
}
export default Day5;
