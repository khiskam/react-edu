import { css } from "@linaria/core";
import { BORDERS, COLORS, SPACING } from "src/assets/styles";

export const modalContainerStyles = css`
  align-items: center;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  background-color: ${COLORS.transparentGray};
`;

export const modalInnerStyles = css`
  display: flex;
  padding: ${SPACING[32]};

  background-color: ${COLORS.white};

  border-radius: ${BORDERS[8]};
  gap: ${SPACING[4]};
`;
