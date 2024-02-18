import { styled } from "@linaria/react";
import { ButtonProps } from "./types";
import { FONT_WEIGHT } from "src/constants/fonts";
import { css } from "@linaria/core";
import { COLORS } from "src/constants";

const outlinedButton = css`
  background-color: ${COLORS.green};
`;

const filledButton = css`
  background-color: ${COLORS.green};
`;

export const Button = styled.button<ButtonProps>`
  ${({ outline }) => (outline ? outlinedButton : filledButton)}
  font-weight: ${FONT_WEIGHT.medium};
`;
