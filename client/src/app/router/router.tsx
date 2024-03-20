import { createBrowserRouter } from "react-router-dom";
import { CartPage, ProductPage, ProductsPage } from "src/pages";
import { ROUTES } from "src/shared/constants";
import { Product } from "src/shared/types";
import { Layout } from "src/shared/ui";

export const router = (
  data: Product[],
  add: (id: number) => void,
  order: (id: number) => void
) =>
  createBrowserRouter(
    [
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            path: ROUTES.products,
            element: <ProductsPage data={data} />,
          },
          {
            path: `${ROUTES.products}:productId`,
            element: <ProductPage data={data} addToCart={add} order={order} />,
          },
          {
            path: `${ROUTES.cart}`,
            element: <CartPage data={data} />,
          },
        ],
      },
    ],
    { basename: import.meta.env.VITE_BASE }
  );
