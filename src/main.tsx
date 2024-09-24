import "./index.css";
import { CookiesProvider } from 'react-cookie'
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LoginPage } from './pages/login';
import { NewAccountPage } from './pages/new-account';
import { App } from "./App.tsx";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { FallbackPage } from "./pages/fallback.tsx";

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
      <RouterProvider fallbackElement={<FallbackPage />} router={router} />
    </CookiesProvider>
  </StrictMode>
);
