import { css, cx } from "@linaria/core";
import {
  BORDERS,
  COLORS,
  FONT_SIZE,
  FONT_WEIGHT,
  SPACING,
  TRANSITION,
} from "src/constants";

const outlinedStyles = css`
  color: ${COLORS.green};
  background-color: transparent;

  outline: 1px solid ${COLORS.green};

  &:hover {
    color: ${COLORS.white};
    background-color: ${COLORS.green};
  }
`;

const filledStyles = css`
  color: ${COLORS.white};
  background-color: ${COLORS.green};

  outline: 1px solid ${COLORS.green};

  &:hover {
    color: ${COLORS.green};
    background-color: transparent;
  }
`;

const commonStyles = css`
  padding: ${SPACING[8]} ${SPACING[12]};

  font-size: ${FONT_SIZE[16]};
  font-weight: ${FONT_WEIGHT.medium};
  text-decoration: none;

  border: none;
  cursor: pointer;

  transition: ${TRANSITION};

  border-radius: ${BORDERS[4]};
`;

export const buttonStyles = (outlined?: boolean) => {
  return cx(commonStyles, outlined ? outlinedStyles : filledStyles);
};
