import { useTheme } from "@emotion/react";
import { Flex, Layout, Typography } from "antd";
import { Container } from "src/shared/ui";
import { Logo } from "src/shared/ui";

import { footerStyles } from "./styled";

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
