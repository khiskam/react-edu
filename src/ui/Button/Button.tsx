import { NavLink } from "react-router-dom";
import { buttonStyles } from "./styles";
import { ButtonProps, NavButtonProps } from "./types";

export const Button = ({ children, outlined, ...props }: ButtonProps) => {
  return (
    <button {...props} className={buttonStyles(outlined)}>
      {children}
    </button>
  );
};

export const NavButton = ({ children, outlined, ...props }: NavButtonProps) => {
  return (
    <NavLink {...props} className={buttonStyles(outlined)}>
      {children}
    </NavLink>
  );
};
