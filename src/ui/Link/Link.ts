import { styled } from "@linaria/react";
import { NavLink } from "react-router-dom";
import { COLORS } from "../../constants";

export const Link = styled(NavLink)`
  text-transform: uppercase;

  color: ${COLORS.white};
`;
