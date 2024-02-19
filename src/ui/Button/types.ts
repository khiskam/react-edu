import { HTMLAttributes } from "react";
import { NavLinkProps } from "react-router-dom";

type Props = {
  outlined?: boolean;
};

export type ButtonProps = Props & HTMLAttributes<HTMLButtonElement>;

export type NavButtonProps = Props & NavLinkProps;
