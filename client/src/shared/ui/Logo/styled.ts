import { css } from "@emotion/css";
import { Theme } from "@emotion/react";

export const logoStyles = (theme: Partial<Theme>) => css`
  font-weight: 500;
  word-break: keep-all;

  color: ${theme.colorPrimary};
`;
