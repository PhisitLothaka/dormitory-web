import { useAuth } from "../../hooks/use-auth";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { role } = useAuth();

  if (role === "USER") {
    return <Navigate to="/user" />;
  }
  return children;
}
