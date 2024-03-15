import { Flex, Layout, Menu, theme } from "antd";
import { useLocation } from "react-router-dom";
import { Container, Logo } from "src/shared/ui";
import { links } from "./constants";

import { headerStyles, menuStyles } from "./styled";

export const Header = () => {
  const location = useLocation();
  const { token } = theme.useToken();

  return (
    <Layout.Header className={headerStyles(token)}>
      <Container>
        <Flex>
          <Logo />
          <Menu
            mode="horizontal"
            selectedKeys={[location.pathname]}
            items={links}
            className={menuStyles}
          />
        </Flex>
      </Container>
    </Layout.Header>
  );
};
