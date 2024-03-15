import { Container } from "src/shared/ui";
import { Flex, Layout, Typography, theme } from "antd";
import { Logo } from "src/shared/ui";
import { footerStyles } from "./styled";

export const Footer = () => {
  const { token } = theme.useToken();

  return (
    <Layout.Footer className={footerStyles(token)}>
      <Container>
        <Flex align="center">
          <Logo />
          <Typography.Text>&#169; Copyright TASKS</Typography.Text>
        </Flex>
      </Container>
    </Layout.Footer>
  );
};
