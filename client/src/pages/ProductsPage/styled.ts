import { css } from "@emotion/css";
import { Theme } from "@emotion/react";

export const searchInputStyles = (theme: Partial<Theme>) => css`
  width: 52%;

  @media screen and (max-width: ${theme.screenMD}px) {
    width: 100%;
  }
`;
