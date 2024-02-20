import { ProductCard, Search } from "src/components";
import { Container, Divider, Title } from "src/ui";
import { PRODUCTS, ROUTES } from "src/constants";
import { cardBoxStyles, catalogInnerStyles } from "./styles";
import { useState } from "react";
import { useDebounce } from "ahooks";

export const CatalogPage = () => {
  const [value, setValue] = useState("");
  const searchValue = useDebounce(value, { wait: 500 });

  return (
    <>
      <Divider />
      <Container className={catalogInnerStyles}>
        <Title>Каталог</Title>
        <Search
          placeholder="Введите название товара"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <div className={cardBoxStyles}>
          {PRODUCTS.map((product) => {
            return product.title
              .toLowerCase()
              .startsWith(searchValue.trim().toLowerCase()) ? (
              <ProductCard
                product={product}
                key={product.id}
                to={`${ROUTES.product}/${product.id}`}
              />
            ) : null;
          })}
        </div>
      </Container>
    </>
  );
};
