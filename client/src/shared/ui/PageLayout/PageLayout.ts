import styled from "@emotion/styled";
import { SPACE } from "src/shared/theme";

import { PageLayoutProps } from "./types";

export const PageLayout = styled.section<PageLayoutProps>`
  align-content: center;
  display: grid;
  justify-items: ${({ justify }) => justify || "start"};
  padding: ${SPACE.padding96}px 0;

  gap: ${({ gap }) => gap || 0}px;
`;
