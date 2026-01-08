import MovieCard from "./MovieCard";
import EmptyState from "./EmptyState";

function MovieList({ movies }) {
  if (movies.length === 0) {
    return <EmptyState />;
  }
  return (
    <div>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
