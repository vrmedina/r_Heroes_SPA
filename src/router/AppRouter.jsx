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

const appRouter = createBrowserRouter([
  {
    path: "login",
    element: <AuthRootPage />,
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
    path: "heroes",
    element: <HeroesRootPage />,
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
    path: "/*",
    element: <Navigate to={"heroes"} />,
    errorElement: <ErrorPage />,
  },
]);

export const AppRouter = () => {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};
