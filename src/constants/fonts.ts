export const FONT_WEIGHT = {
  regular: 400,
  medium: 500,
} as const;

export type FONT_WEIGHT = (typeof FONT_WEIGHT)[keyof typeof FONT_WEIGHT];
