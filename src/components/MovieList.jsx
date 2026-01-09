import MovieCard from "./MovieCard";
import EmptyState from "./EmptyState";

function MovieList({ movies, onRemove }) {
  if (movies.length === 0) {
    return <EmptyState />;
  }
  return (
    <div>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} onRemove={onRemove} />
      ))}
    </div>
  );
}

export default MovieList;
