import { Button, Col, Flex, Modal, Row, Tag, Typography } from "antd";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ROUTES } from "src/shared/constants";
import { SPACE } from "src/shared/theme";
import { Product } from "src/shared/types";
import { Container, PageLayout } from "src/shared/ui";

type ProductPageProps = {
  data: Product[];
  addToCart: (id: number) => void;
  order: (id: number) => void;
};

export const ProductPage = ({ data, addToCart, order }: ProductPageProps) => {
  const { productId } = useParams();
  const [open, setOpen] = useState(false);

  const handleModaleClose = () => setOpen(false);
  // const handleModaleOpen = () => setOpen(true);

  if (!productId) {
    return null;
  }

  const item = data.find((value) => value.id === +productId);

  if (!item) {
    return null;
  }

  return (
    <Container>
      <PageLayout gap={32}>
        <Row gutter={[SPACE.gap12, SPACE.gap12]}>
          <Col span={24}>
            <Typography.Title level={2}>{item.title}</Typography.Title>
          </Col>

          <Col span={24}>
            <Flex wrap="wrap">
              {item.count > 0 ? (
                <Tag color="blue">в наличии</Tag>
              ) : (
                <Tag color="red">нет в наличии</Tag>
              )}
              {item.cart ? (
                <Tag color="blue">в корзине: {item.cart.count} шт.</Tag>
              ) : null}
            </Flex>
          </Col>

          <Col span={24}>
            <Typography.Text>{item.descr}</Typography.Text>
          </Col>
          <Col span={24}>
            <Typography.Text strong>Цена: </Typography.Text>
            <Typography.Text>{item.price} ₽</Typography.Text>
          </Col>
          <Col span={24}>
            <Flex gap={SPACE.gap12}>
              {item.cart ? null : (
                <Button type="primary" onClick={() => addToCart(+productId)}>
                  В корзину
                </Button>
              )}
              {item.count === 0 && !item.isOrdered ? (
                <Button
                  type="primary"
                  onClick={() => {
                    setOpen(true);
                  }}
                >
                  Заказать
                </Button>
              ) : null}
            </Flex>
          </Col>
        </Row>
        <Link to={ROUTES.products}>← Ко всем товарам</Link>
      </PageLayout>

      <Modal
        title="Заказ"
        open={open}
        okText="Заказать"
        onOk={() => {
          order(+productId);
          handleModaleClose();
        }}
        onCancel={handleModaleClose}
        cancelText="Отменить"
        footer={(_, { OkBtn, CancelBtn }) => (
          <>
            <OkBtn />
            <CancelBtn />
          </>
        )}
      >
        <Typography.Text>Вы хотите заказать?</Typography.Text>
      </Modal>
    </Container>
  );
};
