import { css } from "@linaria/core";
import { SPACING } from "src/assets/styles";

export const containerStyles = css`
  height: 100%;
  margin: 0 auto;
  max-width: 1320px;

  @media screen and (max-width: 1400px) {
    max-width: 1140px;
  }

  @media screen and (max-width: 1200px) {
    max-width: 960px;
  }

  @media screen and (max-width: 992px) {
    max-width: 720px;
  }

  @media screen and (max-width: 768px) {
    max-width: 540px;
  }

  @media screen and (max-width: 576px) {
    padding: 0 ${SPACING[24]};
  }
`;
