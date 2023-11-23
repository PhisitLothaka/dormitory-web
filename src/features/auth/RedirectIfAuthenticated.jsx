import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";

export default function RedirectIfAuthenticated({ children }) {
  const { authUser, role } = useAuth();
  if (authUser && role === "USER") {
    return <Navigate to="/user" />;
  }
  if (authUser && role === "ADMIN") {
    return <Navigate to="/" />;
  }
  return children;
}
