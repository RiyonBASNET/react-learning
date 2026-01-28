import { useEffect, useState } from "react";
import { deleteMovie, getMovies, updateMovie } from "../api/movies";
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

  async function handleDeleteMovie(id) {
    setMovies((prev) => prev.filter((movie) => movie.id !== id));

    try {
      await deleteMovie(id);
    } catch {
      setError("Unable to delete movie.");
    }
  }

  function handleEditClick(movie) {
    setEditMovie(movie);
  }

  async function handleUpdateMovie(updatedMovie) {
    try {
      // const saved = await updateMovie(updatedMovie.id, updatedMovie);

      // setMovies((prev) =>
      //   prev.map((movie) => (movie.id === saved.id ? saved : movie)),
      // );

      setMovies((prev) =>
        prev.map((movie) =>
          movie.id === updatedMovie.id ? updatedMovie : movie,
        ),
      );

      setEditMovie(null);
    } catch {
      setError("Failed to update movie");
    }
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

      <MoviesList
        movies={movies}
        onEdit={handleEditClick}
        onDelete={handleDeleteMovie}
      />
    </div>
  );
}

export default Day15;
