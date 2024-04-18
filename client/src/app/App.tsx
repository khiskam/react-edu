import "antd/dist/reset.css";

import { QueryClientProvider } from "@tanstack/react-query";
import { ConfigProvider } from "antd";
import { RouterProvider } from "react-router-dom";
import { AuthProvider } from "src/components";
import { client } from "src/shared/api";
import { config, ThemeProvider } from "src/shared/theme";

import { router } from "./router";

const App = () => {
  return (
    <ConfigProvider theme={config}>
      <ThemeProvider>
        <QueryClientProvider client={client}>
          <AuthProvider>
            <RouterProvider router={router} />
          </AuthProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </ConfigProvider>
  );
};

export default App;
