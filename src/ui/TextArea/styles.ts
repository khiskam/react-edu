import { css } from "@linaria/core";
import { BORDERS, COLORS, FONT_SIZE, SPACING } from "src/assets/styles";

export const textareaStyles = css`
  padding: ${SPACING[8]} ${SPACING[12]};
  width: 100%;

  font-size: ${FONT_SIZE[16]};

  outline: 1px solid ${COLORS.green};
  border: none;

  border-radius: ${BORDERS[4]};
`;
