import { Col, Row, Typography } from "antd";
import { Container, PageLayout } from "src/shared/ui";
import Image from "src/shared/icons/banner.svg?react";
import { SPACE } from "src/shared/theme";
import { title } from "./styled";
import { useTheme } from "@emotion/react";

export const MainPage = () => {
  const theme = useTheme();

  return (
    <Container>
      <PageLayout>
        <Row
          gutter={[SPACE.gap32, SPACE.gap32]}
          align="middle"
          justify="center"
        >
          <Col sm={24} md={{ order: 2, span: 12 }}>
            <Image width="100%" />
          </Col>
          <Col sm={24} md={12}>
            <Typography.Title level={1} className={title(theme)}>
              TASKS &#8212; приложение для управления заметками
            </Typography.Title>
            <Typography.Title level={3} className={title(theme)}>
              Управляйте своими заметками!
            </Typography.Title>
          </Col>
        </Row>
      </PageLayout>
    </Container>
  );
};
