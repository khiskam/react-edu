import { css } from "@emotion/css";
import { Theme } from "@emotion/react";

export const title = (theme: Partial<Theme>) => css`
  @media screen and (max-width: ${theme.screenMD}px) {
    text-align: center;
  }
`;
