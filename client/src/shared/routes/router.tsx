import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./Layout";
import { MainPage } from "src/pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
    ],
  },
]);
