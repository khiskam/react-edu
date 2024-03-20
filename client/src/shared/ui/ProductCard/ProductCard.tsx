import { Card, Col, Flex, Row, Tag, Typography } from "antd";
import { SPACE } from "src/shared/theme";

import { cardStyles } from "./styled";
import { ProductCardProps } from "./types";

export const ProductCard = ({ data, onClick }: ProductCardProps) => {
  return (
    <Card title={data.title} hoverable className={cardStyles} onClick={onClick}>
      <Row gutter={[SPACE.gap12, SPACE.gap12]}>
        <Col>
          <Flex wrap="wrap">
            {data.count > 0 ? (
              <Tag color="blue">в наличии: {data.count} шт.</Tag>
            ) : (
              <Tag color="red">нет в наличии</Tag>
            )}

            {data.cart ? (
              <Tag color="blue">в корзине: {data.cart.count} шт.</Tag>
            ) : null}
          </Flex>
        </Col>
        <Col span={24}>
          <Typography.Text>{data.descr}</Typography.Text>
        </Col>
        <Col span={24}>
          <Typography.Text strong>Цена: </Typography.Text>
          <Typography.Text>{data.price} ₽</Typography.Text>
        </Col>
      </Row>
    </Card>
  );
};
