import { theme } from "antd";
import { ThemeProvider as EmotionProvider } from "@emotion/react";
import { ThemeProviderProps } from "./types";

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const { token } = theme.useToken();
  return <EmotionProvider theme={token}>{children}</EmotionProvider>;
};
