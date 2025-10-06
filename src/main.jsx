import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayOut from "./layouts/MainLayOut.jsx";
import HomePage from "./pages/HomePage.jsx";
import AuthLayout from "./layouts/AuthLayout.jsx";
import Login from "./pages/auth/Login.jsx";
import SignUp from "./pages/auth/SignUp.jsx";
import Profile from "./pages/auth/Profile.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },

  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { index: true, element: <Login /> }, // default for /auth
      { path: "login", element: <Login /> }, // relative path
      { path: "signup", element: <SignUp /> }, // relative path
      { path: "profile", element: <Profile /> }, // relative path
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
