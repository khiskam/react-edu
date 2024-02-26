import { COLORS, FONT_SIZE, FONT_WEIGHT } from "src/assets/styles";
import { css } from "@linaria/core";

export const linkButtonStyles = css`
  font-size: ${FONT_SIZE[16]};
  font-weight: ${FONT_WEIGHT.medium};
  text-decoration: none;

  color: ${COLORS.green};
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
