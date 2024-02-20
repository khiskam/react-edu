import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "../constants";
import { Layout } from "./Layout";
import {
  AddProductPage,
  CatalogPage,
  MainPage,
  ProductPage,
  UsersPage,
} from "../pages";

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

      {
        path: `${ROUTES.product}/:id`,
        element: <ProductPage />,
      },

      {
        path: ROUTES.productCreate,
        element: <AddProductPage />,
      },

      {
        path: ROUTES.users,
        element: <UsersPage />,
      },
    ],
  },
]);
