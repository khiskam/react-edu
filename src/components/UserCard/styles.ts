import { css } from "@linaria/core";
import { COLORS, FONT_SIZE, FONT_WEIGHT, SPACING } from "src/assets/styles";

export const cardStyles = css`
  display: grid;
  padding: ${SPACING[24]};

  border: 1px solid ${COLORS.green};

  justify-items: start;

  border-radius: 4px;
  gap: 8px;

  & > :first-child {
    font-weight: ${FONT_WEIGHT.medium};

    color: ${COLORS.green};
  }

  & > :nth-child(2) {
    font-size: ${FONT_SIZE[12]};
    font-weight: ${FONT_WEIGHT.medium};

    color: ${COLORS.gray};
  }

  & > :nth-child(3) {
    color: ${COLORS.gray};
  }
`;
