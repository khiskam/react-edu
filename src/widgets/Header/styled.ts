import { css } from "@linaria/core";
import { SPACING } from "src/assets/styles";

export const headerStyles = css`
  padding: ${SPACING[24]} 0;
`;

export const headerInneerStyles = css`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const navStyles = css`
  display: flex;

  gap: ${SPACING[12]};
`;
