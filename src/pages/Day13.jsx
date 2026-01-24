import { useEffect, useState } from "react";
import { getMovies } from "../api/movies";
import MovieList from "../components/MovieList";

function Day13() {
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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Day 13 - Fetch Movies from API</h1>
      <MovieList movies={movies} />
    </div>
  );
}

export default Day13;
