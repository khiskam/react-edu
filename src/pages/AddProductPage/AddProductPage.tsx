import { Container, Divider, Title } from "src/ui";
import { AddProductForm } from "src/widgets";
import { addProductInnerStyles } from "./styles";

export const AddProductPage = () => {
  return (
    <>
      <Divider />
      <Container className={addProductInnerStyles}>
        <Title>Добавить товар</Title>
        <AddProductForm />
      </Container>
    </>
  );
};
