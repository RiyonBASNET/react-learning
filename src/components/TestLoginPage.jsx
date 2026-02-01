import { useState } from "react";
import { useAuth } from "../context/useAuth";

function TestLoginPage() {
  const { login, isAuthenticated, user } = useAuth();
  const [username, setUsername] = useState("");

  if (isAuthenticated) {
    return <p>Welcome, {user.username}</p>;
  }

  function handleLogin(e) {
    e.preventDefault();
    login(username !== "" ? username : "user");
  }

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
export default TestLoginPage;
