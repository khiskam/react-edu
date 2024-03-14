import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "../constants";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <></>,
    children: [
      {
        path: ROUTES.main,
        element: <></>,
      },
      {
        path: ROUTES.signin,
        element: <></>,
      },
      {
        path: ROUTES.signup,
        element: <></>,
      },
    ],
  },
]);
