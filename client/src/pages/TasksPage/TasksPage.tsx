import { Card, Checkbox, Col, Row, Typography } from "antd";
import { Container } from "src/shared/ui";
import { Layout, cardStyles } from "./styled";
import { SPACE } from "src/shared/theme";

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
  {
    id: 4,
    title: "Задача 2",
    descr: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    isCompleted: false,
  },
  {
    id: 5,
    title: "Задача 2",
    descr: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    isCompleted: false,
  },
  {
    id: 6,
    title: "Задача 2",
    descr: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    isCompleted: false,
  },
  {
    id: 7,
    title: "Задача 2",
    descr: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    isCompleted: false,
  },
  {
    id: 8,
    title: "Задача 2",
    descr: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    isCompleted: false,
  },
  {
    id: 9,
    title: "Задача 2",
    descr: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    isCompleted: false,
  },

  {
    id: 10,
    title: "Задача 2",
    descr: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    isCompleted: false,
  },
];

export const TasksPage = () => {
  return (
    <Container>
      <Layout>
        <Typography.Title level={2}>Задачи</Typography.Title>

        <Row gutter={[SPACE.gap12, SPACE.gap12]}>
          {data.map((item) => (
            <Col key={item.id} sm={24} lg={12}>
              <Card title={item.title} hoverable className={cardStyles}>
                <Row gutter={[SPACE.gap12, SPACE.gap12]}>
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
      </Layout>
    </Container>
  );
};
