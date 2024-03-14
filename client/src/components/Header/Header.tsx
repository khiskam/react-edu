import { Flex } from "antd";
import { useLocation } from "react-router-dom";
import { Container, Logo } from "src/shared/ui";
import { links } from "./constants";
import { Header as StyledHeader, Menu as StyledMenu } from "./styled";

export const Header = () => {
  const location = useLocation();

  return (
    <StyledHeader>
      <Container>
        <Flex>
          <Logo />
          <StyledMenu
            mode="horizontal"
            selectedKeys={[location.pathname]}
            items={links}
          />
        </Flex>
      </Container>
    </StyledHeader>
  );
};
