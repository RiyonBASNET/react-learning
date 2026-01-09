function MovieCard({ movie, onRemove }) {
  return (
    <div>
      <h3>{movie.title}</h3>
      <p>Release year: {movie.year}</p>
      <button onClick={() => onRemove(movie.id)}>Remove</button>
    </div>
  );
}

export default MovieCard;
