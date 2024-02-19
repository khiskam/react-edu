import { NavLink, NavLinkProps } from "react-router-dom";
import { linkStyles } from "./styles";

export const Link = ({ children, ...props }: NavLinkProps) => {
  return (
    <NavLink {...props} className={linkStyles}>
      {children}
    </NavLink>
  );
};
