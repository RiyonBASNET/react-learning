import { canDeleteMovie } from "../auth/permissions";
import EmptyState from "./EmptyState";
import { useAuth } from "../context/useAuth";

function MoviesList({ movies, onDelete, onEdit }) {
  const { user } = useAuth();

  if (movies.length === 0) {
    return <EmptyState />;
  }
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          {movie.title} ({movie.year})
          {canDeleteMovie(user) &&
            ((<button onClick={() => onDelete(movie.id)}>Delete</button>),
            (<button onClick={() => onEdit(movie)}>Edit</button>))}
        </li>
      ))}
    </ul>
  );
}

export default MoviesList;
