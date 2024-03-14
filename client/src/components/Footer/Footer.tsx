import { Container, Logo } from "src/shared/ui";
import { Footer as StyledFooter } from "./styled";
import { Flex, Typography } from "antd";

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Flex align="center">
          <Logo />
          <Typography.Text>&#169; Copyright TASKS</Typography.Text>
        </Flex>
      </Container>
    </StyledFooter>
  );
};
