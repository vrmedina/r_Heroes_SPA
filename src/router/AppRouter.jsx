import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import {
  DcPage,
  ErrorPage,
  HeroPage,
  HeroesRootPage,
  MarvelPage,
  SearchPage,
} from "../heroes";
import { AuthRootPage, LoginPage } from "../auth";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

const appRouter = createBrowserRouter([
  {
    path: "/login",
    element: (
      <PublicRoute>
        <AuthRootPage />
      </PublicRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <LoginPage />,
      },
      {
        path: "*",
        element: <Navigate to={""} />,
      },
    ],
  },
  {
    path: "/heroes",
    element: (
      <PrivateRoute>
        <HeroesRootPage />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "marvel",
        element: <MarvelPage />,
      },
      {
        path: "dc",
        element: <DcPage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
      {
        path: "hero/:id",
        element: <HeroPage />,
      },
      {
        path: "",
        element: <Navigate to={"marvel"} />,
      },
    ],
  },
  {
    path: "*",
    element: (
      <PrivateRoute>
        <Navigate to={"/heroes"} />
      </PrivateRoute>
    ),
  },
]);

export const AppRouter = () => {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};