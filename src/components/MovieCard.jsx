function MovieCard({ movie }) {
  return (
    <div>
      <h3>{movie.title}</h3>
      <p>Release year: {movie.year}</p>
    </div>
  );
}

export default MovieCard;
