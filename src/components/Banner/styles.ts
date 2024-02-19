import { css } from "@linaria/core";
import {
  BORDERS,
  COLORS,
  FONT_SIZE,
  FONT_WEIGHT,
  SPACING,
} from "src/constants";

export const bannerInnerStyles = css`
  align-items: center;
  display: grid;
  padding: ${SPACING[96]} 0;

  grid-template-columns: repeat(2, 1fr);

  gap: ${SPACING[32]};
`;

export const titleStyles = css`
  font-size: ${FONT_SIZE[32]};
  font-weight: ${FONT_WEIGHT.medium};

  color: ${COLORS.gray};
`;

export const spanStyles = css`
  color: ${COLORS.green};
`;

export const subtitleStyles = css`
  font-size: ${FONT_SIZE[20]};
  font-weight: ${FONT_WEIGHT.medium};

  color: ${COLORS.gray};
`;

export const contentBoxStyles = css`
  display: grid;

  gap: ${SPACING[8]};
`;

export const buttonBoxStyles = css`
  display: flex;
  margin-top: ${SPACING[8]};

  gap: ${SPACING[8]};
`;

export const imgStyles = css`
  width: 100%;

  border-radius: ${BORDERS[4]};
`;
