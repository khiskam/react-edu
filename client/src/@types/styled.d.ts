import "styled-components";
import { config } from "src/shared/theme/theme";

type Theme = typeof config;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
