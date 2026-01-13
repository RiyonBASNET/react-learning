import { useState, useEffect } from "react";
import MovieList from "../components/MovieList";
import AddMovieForm from "../components/AddMovieForm";

function Day5() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setMovies([
        { id: 1, title: "Inception", year: 2010 },
        { id: 2, title: "Interstellar", year: 2014 },
        { id: 3, title: "Dune", year: 2021 },
        { id: 4, title: "Deadpool", year: 2016 },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <p>Loading movies...</p>;
  }

  function handleAddMovie(movie) {
    setMovies((prevMovies) => [...prevMovies, movie]);
  }

  function handleRemoveMovie(id) {
    setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== id));
  }

  return (
    <div>
      <h1>Movie Library</h1>
      <h2>Day 5 - Day 8</h2>

      <AddMovieForm onAdd={handleAddMovie} />
      <MovieList movies={movies} onRemove={handleRemoveMovie} />
    </div>
  );
}
export default Day5;
