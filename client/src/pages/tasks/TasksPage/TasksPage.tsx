import { Button, Card, Col, Row, Typography } from "antd";
import { Container, PageLayout } from "src/shared/ui";
import { cardStyles } from "./styled";
import { SPACE } from "src/shared/theme";
import { useNavigate } from "react-router-dom";
import { data } from "../data";
import { ROUTES } from "src/shared/constants";

export const TasksPage = () => {
  const navigate = useNavigate();

  const goToConcretePage = (id: number) => navigate(`${ROUTES.tasks}/${id}`);
  const goToCreatePage = () => navigate(`${ROUTES.tasks}/create`);

  return (
    <Container>
      <PageLayout gap={32} justify="start">
        <Typography.Title level={2}>Задачи</Typography.Title>

        <Row gutter={[SPACE.gap12, SPACE.gap12]}>
          {data.map((item) => (
            <Col key={item.id} sm={24} lg={12}>
              <Card
                title={item.title}
                hoverable
                className={cardStyles}
                onClick={() => goToConcretePage(item.id)}
              >
                <Row gutter={[SPACE.gap12, SPACE.gap12]}>
                  <Col span={24}>
                    <Typography.Text>{item.descr}</Typography.Text>
                  </Col>
                  <Col span={24}>
                    <Typography.Text strong>Дата создания: </Typography.Text>
                    <Typography.Text>01.01.2024</Typography.Text>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>

        <Button type="primary" onClick={goToCreatePage}>
          Добавить задачу
        </Button>
      </PageLayout>
    </Container>
  );
};
