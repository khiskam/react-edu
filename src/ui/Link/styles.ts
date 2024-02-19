import { COLORS, FONT_SIZE, FONT_WEIGHT } from "src/constants";
import { css } from "@linaria/core";

export const linkStyles = css`
  font-size: ${FONT_SIZE[16]};
  font-weight: ${FONT_WEIGHT.medium};
  text-decoration: none;

  color: ${COLORS.green};
`;
