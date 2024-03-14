import { theme } from "antd";
import { ThemeProvider as Provider } from "styled-components";
import { ThemeProviderProps } from "./types";

const { useToken } = theme;

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const { token } = useToken();

  return <Provider theme={{ token }}>{children}</Provider>;
};
