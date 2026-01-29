import { useAuth } from "../context/useAuth";

function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome, {user.username}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Dashboard;
