import EmptyState from "./EmptyState";

function MovieList({ movies, onDelete }) {
  if (movies.length === 0) {
    return <EmptyState />;
  }
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          {movie.title} ({movie.year})
          <button onClick={() => onDelete(movie.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default MovieList;
