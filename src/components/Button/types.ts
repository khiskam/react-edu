import { ReactNode } from "react";

export type ButtonProps = {
  children?: ReactNode;
  outline?: boolean;
  type: "button" | "submit";
};
