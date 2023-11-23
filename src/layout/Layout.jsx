import { Outlet } from "react-router-dom";
import Header from "./Header";
import Menu from "./Menu";
import { useAuth } from "../hooks/use-auth";

export default function Layout() {
  const { role } = useAuth();
  console.log("🚀 ~ file: Layout.jsx:8 ~ Layout ~ role:", role);
  return (
    <>
      <Header />
      {/* <Menu /> */}
      {role === "ADMIN" ? <Menu /> : ""}

      <Outlet />
    </>
  );
}
