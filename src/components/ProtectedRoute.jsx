import { Navigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/day16" replace />;
  }

  return children;
}

export default ProtectedRoute;
