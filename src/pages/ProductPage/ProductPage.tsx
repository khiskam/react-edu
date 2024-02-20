import { Navigate, useParams } from "react-router-dom";
import { ProductCard } from "src/components";
import { PRODUCTS, ROUTES } from "src/constants";
import { Container, Divider, Title } from "src/ui";
import { productInnerStyles } from "./styles";

export const ProductPage = () => {
  const { id } = useParams();

  const product = id && PRODUCTS.find((product) => product.id === +id);

  return product ? (
    <>
      <Divider />
      <Container className={productInnerStyles}>
        <Title>{product.title}</Title>
        <ProductCard product={product} />
      </Container>
    </>
  ) : (
    <Navigate to={ROUTES.main} />
  );
};
