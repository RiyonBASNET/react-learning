import { useEffect, useState } from "react";
import { getMovies } from "../api/movies";
import MovieList from "../components/MovieList";

function Day10() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadMovies() {
      try {
        setLoading(true);
        setError(null);

        const data = await getMovies();

        const mappedMovies = data.slice(0, 5).map((post) => ({
          id: post.id,
          title: post.title,
          year: 2020,
        }));

        setMovies(mappedMovies);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadMovies();
  }, []);

  if (loading) {
    return <p>Loading Movies...</p>;
  }

  if (error) {
    return <p>Error:{error}</p>;
  }

  return (
    <div>
      <h1>Day 10 - Axios + API Layer</h1>
      <MovieList movies={movies} />
    </div>
  );
}

export default Day10;
