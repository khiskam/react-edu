import { Navigate, Outlet } from "react-router-dom";
import { ROUTES } from "src/shared/constants";
import { useUserStore } from "src/shared/store";

export const UnauthorizedRoute = () => {
  const isAuth = useUserStore(({ auth }) => (auth ? true : false));

  return isAuth ? <Outlet /> : <Navigate to={ROUTES.signin} />;
};

export const AuthorizedRoute = () => {
  const isAuth = useUserStore(({ auth }) => (auth ? true : false));

  return isAuth ? <Navigate to={ROUTES.main} /> : <Outlet />;
};
