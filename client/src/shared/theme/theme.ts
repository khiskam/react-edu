import { ThemeConfig } from "antd";
import { BREAKPOINTS } from "./breakpoints";
import { HEADER_HEIGHT } from "./height";

export const config: ThemeConfig = {
  token: {
    colorPrimary: "#2b6cb0",
    colorInfo: "#2b6cb0",
    colorSuccess: "#38a169",
    colorWarning: "#d69e2e",
    colorError: "#c53030",
    colorTextBase: "#2d3748",
    fontSize: 16,
    fontSizeHeading1: 32,
    fontSizeHeading2: 24,
    fontSizeHeading3: 16,
    fontSizeSM: 12,
    fontSizeLG: 20,
    fontSizeXL: 24,
    borderRadius: 8,
    screenXS: BREAKPOINTS.xs,
    screenXSMin: BREAKPOINTS.xs,
    screenXSMax: BREAKPOINTS.xsMax,
    screenSM: BREAKPOINTS.sm,
    screenSMMin: BREAKPOINTS.sm,
    screenSMMax: BREAKPOINTS.smMax,
    screenMD: BREAKPOINTS.md,
    screenMDMin: BREAKPOINTS.md,
    screenMDMax: BREAKPOINTS.mdMax,
    screenLG: BREAKPOINTS.lg,
    screenLGMin: BREAKPOINTS.lg,
    screenLGMax: BREAKPOINTS.lgMax,
    screenXL: BREAKPOINTS.xl,
    screenXLMin: BREAKPOINTS.xl,
    screenXLMax: BREAKPOINTS.xlMax,
    screenXXL: BREAKPOINTS.xxl,
    screenXXLMin: BREAKPOINTS.xxl,
  },
  components: {
    Menu: {
      colorBgContainer: "transparent",
      itemPaddingInline: "20px 0",
    },
    Layout: {
      headerBg: "transparent",
      headerHeight: HEADER_HEIGHT,
      headerPadding: 0,
      footerPadding: 0,
    },
  },
} as const;
