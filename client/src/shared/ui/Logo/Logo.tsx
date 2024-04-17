import { useTheme } from "@emotion/react";
import { Link } from "react-router-dom";
import { ROUTES } from "src/shared/constants";

import { logoStyles } from "./styled";

export const Logo = () => {
  const theme = useTheme();

  return (
    <Link to={ROUTES.main} className={logoStyles(theme)}>
      TASKS
    </Link>
  );
};
