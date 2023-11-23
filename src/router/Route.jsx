import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import LoginPage from "../page/LoginPage";
import Layout from "../layout/Layout";
import HomePage from "../page/HomePage";
import Summarize from "../page/Summarize";
import RegisterPage from "../page/RegisterPage";
import Authenticated from "../features/auth/Authenticated";
import RedirectIfAuthenticated from "../features/auth/RedirectIfAuthenticated";
import MeterPage from "../page/MeterPage";
import MeterContextProvider from "../contexts/MeterContext";
import Order from "../page/Order";
import UserPage from "../page/UserPage";
import ProtectedRoute from "../features/auth/ProtectedRoute";
import ProtectedAdmin from "../features/auth/ProtectedAdmin";

const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <RedirectIfAuthenticated>
        <LoginPage />
      </RedirectIfAuthenticated>
    ),
  },
  {
    path: "/register",
    element: (
      <RedirectIfAuthenticated>
        <RegisterPage />
      </RedirectIfAuthenticated>
    ),
  },

  {
    path: "/",
    element: (
      <Authenticated>
        <MeterContextProvider>
          <Layout />
        </MeterContextProvider>
      </Authenticated>
    ),
    children: [
      {
        path: "",
        element: (
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        ),
      },
      {
        path: "summarize",
        element: (
          <ProtectedRoute>
            <Summarize />
          </ProtectedRoute>
        ),
      },
      {
        path: "order",
        element: (
          <ProtectedRoute>
            <Order />
          </ProtectedRoute>
        ),
      },
      {
        path: "/user",
        element: (
          <ProtectedAdmin>
            <UserPage />
          </ProtectedAdmin>
        ),
      },

      {
        path: "meter",
        element: (
          <ProtectedRoute>
            <MeterPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
