import { ROUTES } from "src/shared/constants";
import { Link } from "react-router-dom";
import { logoStyles } from "./styled";
import { useTheme } from "@emotion/react";

export const Logo = () => {
  const theme = useTheme();

  return (
    <Link to={ROUTES.main} className={logoStyles(theme)}>
      TASKS
    </Link>
  );
};
