import { useEffect, useState } from "react";
import { getMovies, createMovie } from "../api/movies";
import MovieList from "../components/MovieList";
import AddMovieForm from "../components/AddMovieForm";

function Day11() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadMovies() {
      try {
        setLoading(true);
        const data = await getMovies();

        setMovies(
          data.slice(0, 5).map((post) => ({
            id: post.id,
            title: post.title,
            year: 2020,
          }))
        );
      } catch {
        setError("Failed to load movies.");
      } finally {
        setLoading(false);
      }
    }
    loadMovies();
  }, []);

  async function handleAddMovie(movie) {
    try {
      const created = await createMovie(movie);
      setMovies((prevMovies) => [
        ...prevMovies,
        {
          id: created.id,
          title: created.title,
          year: created.year || movie.year,
        },
      ]);
    } catch {
      setError("Failed to create moive.");
    }
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error{error}</p>;
  return (
    <div>
      <h1>Day 11 - Create Movie via API</h1>

      <AddMovieForm onAdd={handleAddMovie} />

      <MovieList movies={movies} />
    </div>
  );
}
export default Day11;
