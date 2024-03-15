import { css } from "@emotion/css";
import { Theme } from "@emotion/react";

export const headerStyles = (theme: Partial<Theme>) => css`
  border-bottom: 1px solid ${theme.colorBorder};
`;

export const menuStyles = css`
  flex: 1;
  justify-content: end;
  min-width: 0;

  border-bottom: none;
`;
