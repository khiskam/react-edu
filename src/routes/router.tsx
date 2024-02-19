import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "../constants";
import { Layout } from "./Layout";
import { CatalogPage, MainPage } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: ROUTES.main,
        element: <MainPage />,
      },

      {
        path: ROUTES.catalog,
        element: <CatalogPage />,
      },
    ],
  },
]);
