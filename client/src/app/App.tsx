import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { ConfigProvider } from "antd";
import { ThemeProvider, config } from "src/shared/theme";
import "antd/dist/reset.css";

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
