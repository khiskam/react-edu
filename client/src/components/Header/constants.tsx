import { Button, MenuProps } from "antd";
import { Link } from "react-router-dom";
import { ROUTES } from "src/shared/constants";
import { unsetUser } from "src/shared/store";

const COMMON_NAV_LINKS = [
  {
    title: "Главная",
    route: ROUTES.main,
  },
];

const AUTH_NAV_LINKS: (
  | { title: string; route: string }
  | { title: string; onClick: React.MouseEventHandler }
)[] = [
  ...COMMON_NAV_LINKS,
  {
    title: "Задачи",
    route: ROUTES.tasks,
  },
  {
    title: "Выйти",
    onClick: () => unsetUser(),
  },
];

const UNAUTH_NAV_LINKS = [
  ...COMMON_NAV_LINKS,
  {
    title: "Войти",
    route: ROUTES.signin,
  },
  {
    title: "Регистрация",
    route: ROUTES.signup,
  },
];

export const unauthLinks: MenuProps["items"] = UNAUTH_NAV_LINKS.map((item) => ({
  key: item.route,
  label: <Link to={item.route}>{item.title}</Link>,
}));

export const authLinks: MenuProps["items"] = AUTH_NAV_LINKS.map((item) => ({
  key: item.title,
  label:
    "route" in item ? (
      <Link to={item.route}>{item.title}</Link>
    ) : (
      <Button type="link" onClick={item.onClick}>
        {item.title}
      </Button>
    ),
}));
