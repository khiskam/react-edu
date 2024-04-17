import { css } from "@emotion/css";
import { Theme } from "@emotion/react";
import { HEADER_HEIGHT } from "src/shared/theme";

export const footerStyles = (theme: Partial<Theme>) => css`
  align-items: center;
  display: flex;
  height: ${HEADER_HEIGHT}px;

  border-top: 1px solid ${theme.colorBorder};
`;
