import { useEffect, useState } from "react";
import { deleteMovie, getMovies } from "../api/movies";
import MoviesList from "../components/MoviesList";

function Day14() {
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
          })),
        );
      } catch {
        setError("Failed to load movies.");
      } finally {
        setLoading(false);
      }
    }
    loadMovies();
  }, []);

  async function handleDeleteMovie(id) {
    setMovies((prev) => prev.filter((movie) => movie.id !== id));

    try {
      await deleteMovie(id);
    } catch {
      setError("Unable to delete movie.");
    }
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Day 13 - Delete Movies via API</h1>
      <MoviesList movies={movies} onDelete={handleDeleteMovie} />
    </div>
  );
}

export default Day14;
