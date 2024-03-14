import { BREAKPOINTS } from "src/shared/theme";
import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1500px;
  width: 100%;

  @media screen and (max-width: ${BREAKPOINTS.xxl}px) {
    max-width: 1140px;
  }

  @media screen and (max-width: ${BREAKPOINTS.xl}px) {
    max-width: 960px;
  }

  @media screen and (max-width: ${BREAKPOINTS.lg}px) {
    max-width: 720px;
  }

  @media screen and (max-width: ${BREAKPOINTS.md}px) {
    padding: 0 40px;
  }

  @media screen and (max-width: ${BREAKPOINTS.sm}px) {
    padding: 0 20px;
  }
`;
