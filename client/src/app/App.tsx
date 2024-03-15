import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { ConfigProvider, theme } from "antd";
import { config } from "src/shared/theme";
import "antd/dist/reset.css";
import { ThemeProvider } from "@emotion/react";

const App = () => {
  const { token } = theme.useToken();
  return (
    <ConfigProvider theme={config}>
      <ThemeProvider theme={token}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </ConfigProvider>
  );
};

export default App;
