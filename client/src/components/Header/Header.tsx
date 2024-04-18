import { useTheme } from "@emotion/react";
import { Layout, Menu } from "antd";
import { useLocation } from "react-router-dom";
import { useUserStore } from "src/shared/store";
import { Container, Logo } from "src/shared/ui";

import { authLinks, unauthLinks } from "./constants";
import { HeaderMenu, headerStyles, menuStyles } from "./styled";

export const Header = () => {
  const auth = useUserStore(({ auth }) => (auth ? true : false));
  const location = useLocation();
  const theme = useTheme();

  return (
    <Layout.Header className={headerStyles(theme)}>
      <Container>
        <HeaderMenu>
          <Logo />

          <Menu
            mode="horizontal"
            selectedKeys={[location.pathname]}
            items={auth ? authLinks : unauthLinks}
            className={menuStyles}
          />
        </HeaderMenu>
      </Container>
    </Layout.Header>
  );
};
