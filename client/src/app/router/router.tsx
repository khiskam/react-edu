import { createBrowserRouter } from "react-router-dom";
import { LoginPage, MainPage, RegisterPage, TasksPage } from "src/pages";
import { ROUTES } from "src/shared/constants";
import { Layout } from "src/shared/ui";

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
        path: ROUTES.signin,
        element: <LoginPage />,
      },
      {
        path: ROUTES.signup,
        element: <RegisterPage />,
      },
      {
        path: ROUTES.tasks,
        element: <TasksPage />,
      },
    ],
  },
]);
