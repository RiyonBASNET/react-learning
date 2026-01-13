import { useEffect, useState } from "react";
import MovieList from "../components/MovieList";

function Day9() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMovies() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch movies");
        }

        const data = await response.json();

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
    fetchMovies();
  }, []);

  if (loading) {
    return <p>Loading Movies...</p>;
  }

  if (error) {
    return <p>Error:{error}</p>;
  }

  return (
    <div>
      <h1>Day 9 - API-driven Movies List</h1>
      <MovieList movies={movies} />
    </div>
  );
}

export default Day9;
