import { ThemeConfig, theme } from "antd";

export const HEADER_HEIGHT = 64;

export const SPACE = {
  gap12: 12,
  gap32: 32,
  padding96: 96,
};

export const config: ThemeConfig = {
  token: {
    colorPrimary: "#2b6cb0",
    colorInfo: "#2b6cb0",
    colorSuccess: "#38a169",
    colorWarning: "#d69e2e",
    colorError: "#c53030",
    colorTextBase: "#2d3748",
    fontSize: 16,
    colorBgContainer: "#ffffff",
    fontSizeHeading1: 32,
    fontSizeHeading2: 24,
    fontSizeHeading3: 16,
    fontSizeSM: 12,
    fontSizeLG: 20,
    fontSizeXL: 24,
    borderRadius: 8,
  },
  components: {
    Menu: {
      colorBgContainer: "transparent",
      itemPaddingInline: "20px 0",
    },
    Layout: {
      headerBg: "transparent",
      footerBg: "transparent",
      bodyBg: "transparent",
      headerHeight: HEADER_HEIGHT,
      headerPadding: 0,
      footerPadding: 0,
    },
    Card: {
      colorBorderSecondary: theme.getDesignToken().colorBorder,
      borderRadiusLG: 4,
    },
    Checkbox: {
      borderRadiusSM: 4,
    },
  },
} as const;
