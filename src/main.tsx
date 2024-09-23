import { CookiesProvider } from 'react-cookie'
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LoginPage } from './pages/login';
import { NewAccountPage } from './pages/new-account';
import { App } from "./App.tsx";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <App />
    )
  },
  {
    path: "/login",
    element: (
      <LoginPage />
    ),
  },
  {
    path: "/new-account",
    element: <NewAccountPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CookiesProvider>
      <RouterProvider router={router} />
    </CookiesProvider>
  </StrictMode>
);
