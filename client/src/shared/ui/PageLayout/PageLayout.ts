import styled from "@emotion/styled";
import { SPACE } from "src/shared/theme";

import { PageLayoutProps } from "./types";

export const PageLayout = styled.section<PageLayoutProps>`
  align-content: ${({ align }) => align || "unset"};
  display: grid;
  justify-items: ${({ justify }) => justify || "unset"};
  padding: ${SPACE.padding96}px 0;

  gap: ${({ gap }) => gap || 0}px;
`;
