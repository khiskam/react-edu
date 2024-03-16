import "@emotion/react";

import { theme } from "antd";
// import { config } from "src/shared/theme/theme";

const { token } = theme.useToken();

type AntdTheme = typeof token;

declare module "@emotion/react" {
  export interface Theme extends AntdTheme {}
}
