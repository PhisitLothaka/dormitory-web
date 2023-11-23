import { useAuth } from "../../hooks/use-auth";
import { Navigate } from "react-router-dom";

export default function ProtectedAdmin({ children }) {
  const { role } = useAuth();

  if (role === "ADMIN") {
    return <Navigate to="/" />;
  }
  return children;
}
