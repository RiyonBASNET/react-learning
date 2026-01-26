import { useEffect, useState } from "react";
import { getMovies, updateMovie } from "../api/movies";
import MoviesList from "../components/MoviesList";
import EditMovieForm from "../components/EditMovieForm";

function Day15() {
  const [movies, setMovies] = useState([]);
  const [editMovie, setEditMovie] = useState(null);
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

  function handleEditClick(movie) {
    setEditMovie(movie);
  }

  async function handleUpdateMovie(updatedMovie) {
    const saved = await updateMovie(updatedMovie.id, updatedMovie);

    setMovies((prev) =>
      prev.map((movie) => (movie.id === saved.id ? saved : movie)),
    );

    setEditMovie(null);
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Day 15 - Update Movies</h1>

      {editMovie && (
        <EditMovieForm
          movie={editMovie}
          onSave={handleUpdateMovie}
          onCancel={() => setEditMovie(null)}
        />
      )}

      <MoviesList movies={movies} onEdit={handleEditClick} />
    </div>
  );
}

export default Day15;
