import { css } from "@emotion/css";
import { Theme } from "@emotion/react";
import styled from "@emotion/styled";

export const headerStyles = (theme: Partial<Theme>) => css`
  border-bottom: 1px solid ${theme.colorBorder};
`;

export const menuStyles = css`
  justify-content: end;
  min-width: 0;

  border-bottom: none;
`;

export const HeaderMenu = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
`;
