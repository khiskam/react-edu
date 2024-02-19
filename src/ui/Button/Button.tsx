import { buttonStyles } from "./styles";
import { ButtonProps } from "./types";

export const Button = ({ children, outlined, ...props }: ButtonProps) => {
  return (
    <button {...props} className={buttonStyles(outlined)}>
      {children}
    </button>
  );
};
