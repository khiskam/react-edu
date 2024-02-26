import { css } from "@linaria/core";
import { BORDERS, COLORS, FONT_WEIGHT, SPACING } from "src/assets/styles";

export const categoriesInnerStyles = css`
  padding: ${SPACING[96]} 0;
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

export const categoriesContainer = css`
  margin-top: 32px;
  display: grid;
  grid-template-columns: 300px auto;
  gap: 32px;
`;

export const accordionContainerStyles = css`
  align-content: start;
  display: grid;
  gap: ${SPACING[16]};
`;
