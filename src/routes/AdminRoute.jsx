import { Navigate } from "react-router-dom";
import { canAccessAdmin } from "../auth/permissions";
import { useAuth } from "../context/useAuth";

function AdminRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) return <p>Checking permission...</p>;

  if (!canAccessAdmin(user)) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default AdminRoute;
