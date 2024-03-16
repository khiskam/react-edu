import { useTheme } from "@emotion/react";
import { Layout, Menu } from "antd";
import { useLocation } from "react-router-dom";
import { Container, Logo } from "src/shared/ui";

import { links } from "./constants";
import { HeaderMenu, headerStyles, menuStyles } from "./styled";

export const Header = () => {
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
            items={links}
            className={menuStyles}
          />
        </HeaderMenu>
      </Container>
    </Layout.Header>
  );
};
