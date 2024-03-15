import { Container } from "src/shared/ui";
import { Flex, Layout, Typography } from "antd";
import { Logo } from "src/shared/ui";
import { footerStyles } from "./styled";
import { useTheme } from "@emotion/react";

export const Footer = () => {
  const theme = useTheme();

  return (
    <Layout.Footer className={footerStyles(theme)}>
      <Container>
        <Flex align="center" justify="space-between">
          <Logo />
          <Typography.Text>&#169; Copyright TASKS</Typography.Text>
        </Flex>
      </Container>
    </Layout.Footer>
  );
};
