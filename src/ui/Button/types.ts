import { ButtonHTMLAttributes } from "react";
import { NavLinkProps } from "react-router-dom";

type Props = {
  outlined?: boolean;
};

export type ButtonProps = Props & ButtonHTMLAttributes<HTMLButtonElement>;

export type NavButtonProps = Props & NavLinkProps;
