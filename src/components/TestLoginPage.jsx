import { useAuth } from "../context/useAuth";

function TestLoginPage() {
  const { login, isAuthenticated, user } = useAuth();

  if (isAuthenticated) {
    return <p>Welcome, {user.username}</p>;
  }

  return <button onClick={() => login("demoUser")}>Login</button>;
}
export default TestLoginPage;
