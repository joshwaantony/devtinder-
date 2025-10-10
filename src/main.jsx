
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Toaster } from "react-hot-toast"; // ✅ Import toast provider

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayOut from "./layouts/MainLayOut.jsx";
import HomePage from "./pages/HomePage.jsx";
import AuthLayout from "./layouts/AuthLayout.jsx";
import Login from "./pages/auth/Login.jsx";
import SignUp from "./pages/auth/SignUp.jsx";
import Profile from "./pages/auth/Profile.jsx";
import Feed from "./pages/feed.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },

           {
        path: "feed",
        element: <Feed />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { index: true, element: <Login /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <SignUp /> },
      { path: "profile", element: <Profile /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* ✅ Toast container (works globally) */}
    <Toaster position="top-right" reverseOrder={false} />
  </StrictMode>
);
