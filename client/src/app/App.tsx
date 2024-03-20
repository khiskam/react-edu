import "antd/dist/reset.css";

import { ConfigProvider } from "antd";
import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import { config, ThemeProvider } from "src/shared/theme";

import { products } from "./data";
import { router } from "./router";

const App = () => {
  const [data, setData] = useState(products);

  const addToCart = (id: number) => {
    data.forEach((item, i) => {
      if (item.id === id) {
        setData((prev) => {
          prev[i].cart = { count: 1 };
          return [...prev];
        });
        return;
      }
    });
  };

  const order = (id: number) => {
    data.forEach((item, i) => {
      if (item.id === id) {
        setData((prev) => {
          prev[i].isOrdered = true;
          return [...prev];
        });
        return;
      }
    });
  };

  return (
    <ConfigProvider theme={config}>
      <ThemeProvider>
        <RouterProvider router={router(data, addToCart, order)} />
      </ThemeProvider>
    </ConfigProvider>
  );
};

export default App;
