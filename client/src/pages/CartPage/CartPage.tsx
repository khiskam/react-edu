import { Col, Row, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "src/shared/constants";
import { SPACE } from "src/shared/theme";
import { Product } from "src/shared/types";
import { Container, PageLayout } from "src/shared/ui";
import { ProductCard } from "src/shared/ui";

type CartPageProps = {
  data: Product[];
};

export const CartPage = ({ data }: CartPageProps) => {
  const navigate = useNavigate();

  const goToProductPage = (id: number) => navigate(`${ROUTES.products}${id}`);

  return (
    <Container>
      <PageLayout gap={32} justify="start">
        <Typography.Title level={2}>Товары</Typography.Title>

        <Row gutter={[SPACE.gap12, SPACE.gap12]}>
          {data
            .filter((item) => item.cart)
            .map((item) => (
              <Col key={item.id} sm={24} lg={12}>
                <ProductCard
                  data={item}
                  onClick={() => goToProductPage(item.id)}
                />
              </Col>
            ))}
        </Row>
      </PageLayout>
    </Container>
  );
};
