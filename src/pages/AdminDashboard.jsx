import { useAuth } from "../context/useAuth";
import MoviesList from "../components/MoviesList";

function AdminDashboard() {
  const { user, logout } = useAuth();

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <p>Logged in as: {user.username}</p>
      <p>Role: {user.role}</p>

      <hr />
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default AdminDashboard;
