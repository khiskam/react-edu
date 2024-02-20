import { css } from "@linaria/core";
import { BORDERS, COLORS, FONT_WEIGHT, SPACING } from "src/assets/styles";

export const categoriesInnerStyles = css`
  padding: ${SPACING[96]} 0;
`;

export const categoriesBoxStyles = css`
  display: grid;
  margin-top: ${SPACING[32]};

  grid-template-columns: repeat(4, 1fr);

  gap: ${SPACING[12]};
`;

export const cardStyles = css`
  display: grid;
  gap: ${SPACING[8]};

  & > img {
    width: 100%;

    border-radius: ${BORDERS[4]};
  }

  & > p {
    font-weight: ${FONT_WEIGHT.medium};

    color: ${COLORS.gray};
  }
`;
