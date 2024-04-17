import "antd/dist/reset.css";

import { ConfigProvider } from "antd";
import { RouterProvider } from "react-router-dom";
import { config, ThemeProvider } from "src/shared/theme";

import { router } from "./router";

const App = () => {
  return (
    <ConfigProvider theme={config}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </ConfigProvider>
  );
};

export default App;
