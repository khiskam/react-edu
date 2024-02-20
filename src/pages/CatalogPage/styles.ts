import { css } from "@linaria/core";
import { SPACING } from "src/assets/styles";

export const catalogInnerStyles = css`
  display: grid;
  padding: ${SPACING[96]} 0;

  gap: ${SPACING[32]};
`;

export const cardBoxStyles = css`
  display: grid;

  grid-template-columns: repeat(2, 1fr);

  gap: ${SPACING[8]};
`;
