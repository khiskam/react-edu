import { linkButtonStyles } from "./styles";
import React from "react";

export const LinkButton = ({
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <button {...props} className={linkButtonStyles}></button>;
};
