import { createBrowserRouter } from "react-router-dom";
import {
  CreatePage,
  EditPage,
  LoginPage,
  MainPage,
  RegisterPage,
  TasksPage,
} from "src/pages";
import { ROUTES } from "src/shared/constants";
import { AuthorizedRoute, Layout, UnauthorizedRoute } from "src/shared/ui";

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
        element: <AuthorizedRoute />,
        children: [
          {
            path: ROUTES.signin,
            element: <LoginPage />,
          },
          {
            path: ROUTES.signup,
            element: <RegisterPage />,
          },
        ],
      },
      {
        element: <UnauthorizedRoute />,
        children: [
          {
            path: ROUTES.tasks,
            element: <TasksPage />,
          },
          {
            path: ROUTES.createTask,
            element: <CreatePage />,
          },
          {
            path: ROUTES.editTask(":taskId"),
            element: <EditPage />,
          },
        ],
      },
    ],
  },
]);
