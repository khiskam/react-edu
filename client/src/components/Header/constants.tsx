import { MenuProps } from "antd";
import { Link } from "react-router-dom";
import { ROUTES } from "src/shared/constants";

const NAV_LINKS = [
  {
    title: "Товары",
    route: ROUTES.products,
  },
  {
    title: "Корзина",
    route: ROUTES.cart,
  },
];

export const links: MenuProps["items"] = NAV_LINKS.map((item) => ({
  key: item.route,
  label: <Link to={item.route}>{item.title}</Link>,
}));
