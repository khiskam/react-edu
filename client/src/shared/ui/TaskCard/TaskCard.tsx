import { Card, Col, Row, Tag, Typography } from "antd";
import { SPACE } from "src/shared/theme";

import { cardStyles } from "./styled";
import { TaskCardProps } from "./types";

export const TaskCard = ({ data, onClick }: TaskCardProps) => {
  return (
    <Card title={data.title} hoverable className={cardStyles} onClick={onClick}>
      <Row gutter={[SPACE.gap12, SPACE.gap12]}>
        <Col>
          <Tag color={data.isCompleted ? "blue" : "red"}>
            {data.isCompleted ? "выполнено" : "необходимо выполнить"}
          </Tag>
        </Col>
        <Col span={24}>
          <Typography.Text>{data.descr}</Typography.Text>
        </Col>
        <Col span={24}>
          <Typography.Text strong>Дата создания: </Typography.Text>
          <Typography.Text>
            {data.createdAt.toLocaleDateString()}
          </Typography.Text>
        </Col>
      </Row>
    </Card>
  );
};
