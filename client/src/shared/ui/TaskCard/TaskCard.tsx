import { Card, Col, Row, Typography } from "antd";
import { SPACE } from "src/shared/theme";

import { cardStyles } from "./styled";
import { TaskCardProps } from "./types";

export const TaskCard = ({ data, onClick }: TaskCardProps) => {
  return (
    <Card title={data.title} hoverable className={cardStyles} onClick={onClick}>
      <Row gutter={[SPACE.gap12, SPACE.gap12]}>
        <Col span={24}>
          <Typography.Text>{data.descr}</Typography.Text>
        </Col>
        <Col span={24}>
          <Typography.Text strong>Дата создания: </Typography.Text>
          <Typography.Text>01.01.2024</Typography.Text>
        </Col>
      </Row>
    </Card>
  );
};
