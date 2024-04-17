export const ROUTES = {
  main: "/",
  signin: "/signin",
  signup: "/signup",
  tasks: "/tasks",
  createTask: "/tasks/create",
  editTask: (pathValue: string | number) => `/tasks/${pathValue}/edit`,
} as const;
