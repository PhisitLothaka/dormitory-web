import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import LoginPage from "../page/LoginPage";
import Layout from "../layout/Layout";
import HomePage from "../page/HomePage";
import Summarize from "../page/Summarize";
import RegisterPage from "../page/RegisterPage";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "summarize", element: <Summarize /> },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
