import { css } from "@emotion/css";
import styled from "@emotion/styled";
import { SPACE } from "src/shared/theme";

export const cardStyles = css`
  &:hover {
    box-shadow: 2px 2px 24px 2px rgba(0, 0, 0, 0.08);
  }
`;

export const Layout = styled.section`
  align-content: center;
  display: grid;
  padding: 96px 0;
  gap: ${SPACE.gap32}px;
`;
