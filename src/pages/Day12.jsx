import { useEffect, useState } from "react";
import { getMovies, createMovie } from "../api/movies";
import MovieList from "../components/MovieList";
import AddMovieForm2 from "../components/AddMovieForm2";

function Day12() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  function handleAddMovie(movie) {
    setMovies((prevMovies) => [
      ...prevMovies,
      {
        id: Date.now(),
        title: movie.title,
        year: movie.year,
      },
    ]);
  }

  if (error) return <p>Error{error}</p>;
  return (
    <div>
      <h1>Day 12 - Controlled Forms and Validation</h1>

      <AddMovieForm2 onAdd={handleAddMovie} />

      <MovieList movies={movies} />
    </div>
  );
}
export default Day12;
