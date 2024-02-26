import { styled } from "@linaria/react";

import Arrow from "src/assets/icons/arrow.svg?react";
import { COLORS } from "src/assets/styles";

export const ArrowIcon = styled(Arrow)`
  width: 16px;
  transition: 0.4s;

  & path {
    fill: ${COLORS.green};
  }
`;

export const AccordionBox = styled.a`
  align-items: center;
  display: grid;
  padding: 20px;
  border: 1px solid ${COLORS.green};
  cursor: pointer;
  grid-template-areas: "title arrow" "body body";
  grid-template-columns: 1fr auto;
  border-radius: 12px;
  column-gap: 12px;
`;

export const BodyText = styled.div`
  display: grid;
  margin-top: 16px;
  overflow: hidden;
  transition: 0.4s ease-out;
  grid-area: body;

  &.accordion-enter {
    margin-top: 0;
    grid-template-rows: 0fr;
  }

  &.accordion-enter-active {
    padding-top: 16px;
    grid-template-rows: 1fr;
    transition: 400ms;
  }

  &.accordion-exit {
    margin-top: 16px;
    grid-template-rows: 1fr;
    transform: translateY(0);
  }

  &.accordion-exit-active {
    margin-top: 0;
    grid-template-rows: 0fr;
    transition: 400ms;
  }
`;
