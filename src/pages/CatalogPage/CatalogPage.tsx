import { ProductCard, Search } from "src/components";
import { Container, Divider, Title } from "src/ui";
import { PRODUCTS, ROUTES } from "src/constants";
import { cardBoxStyles, catalogInnerStyles } from "./styles";
import { useState } from "react";
import { useDebounce } from "ahooks";
import { useNavigate } from "react-router-dom";

export const CatalogPage = () => {
  const [value, setValue] = useState("");
  const searchValue = useDebounce(value, { wait: 500 });
  const navigate = useNavigate();
  const [openId, setOpenId] = useState(-1);

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
                openId={openId}
                onClose={() => setOpenId(-1)}
                onOpen={(id: number) => setOpenId(id)}
                onPage={(id: number) => navigate(`${ROUTES.product}/${id}`)}
              />
            ) : null;
          })}
        </div>
      </Container>
    </>
  );
};
