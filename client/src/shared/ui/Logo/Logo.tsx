import { ROUTES } from "src/shared/constants";
import { Logo as StyledLogo } from "./styled";

export const Logo = () => {
  return <StyledLogo to={ROUTES.main}>TASKS</StyledLogo>;
};
