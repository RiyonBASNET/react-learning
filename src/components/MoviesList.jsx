import EmptyState from "./EmptyState";

function MovieList({ movies, onDelete, onEdit }) {
  if (movies.length === 0) {
    return <EmptyState />;
  }
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          {movie.title} ({movie.year})
          <button onClick={() => onDelete(movie.id)}>Delete</button>
          <button onClick={() => onEdit(movie)}>Edit</button>
        </li>
      ))}
    </ul>
  );
}

export default MovieList;
