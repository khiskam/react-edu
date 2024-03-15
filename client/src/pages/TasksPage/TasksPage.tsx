import { Card, Checkbox, Col, Row, Typography, theme } from "antd";
import { Container } from "src/shared/ui";
import { cardStyles } from "./styled";

const data = [
  {
    id: 1,
    title: "Задача 1",
    descr: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    isCompleted: false,
  },
  {
    id: 2,
    title: "Задача 2",
    descr: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    isCompleted: false,
  },
  {
    id: 3,
    title: "Задача 2",
    descr: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    isCompleted: false,
  },
];

export const TasksPage = () => {
  const { token } = theme.useToken();
  return (
    <Container>
      <Typography.Title level={2}>Задачи</Typography.Title>

      <Row gutter={[token.marginSM, token.marginSM]}>
        {data.map((item) => (
          <Col key={item.id} sm={24} lg={12}>
            <Card title={item.title} hoverable className={cardStyles}>
              <Row gutter={[token.marginSM, token.marginSM]}>
                <Col span={24}>
                  <Typography.Text>{item.descr}</Typography.Text>
                </Col>
                <Col span={24}>
                  <Checkbox>Выполнено</Checkbox>
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
