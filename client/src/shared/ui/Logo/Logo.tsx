import { ROUTES } from "src/shared/constants";
import { Link } from "react-router-dom";
import { logoStyles } from "./styled";
import { theme } from "antd";

export const Logo = () => {
  const { token } = theme.useToken();

  return (
    <Link to={ROUTES.main} className={logoStyles(token)}>
      TASKS
    </Link>
  );
};
