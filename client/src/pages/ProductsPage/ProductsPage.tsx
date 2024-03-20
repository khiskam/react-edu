import { useTheme } from "@emotion/react";
import { Col, Flex, Input, Row, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "src/shared/constants";
import { SPACE } from "src/shared/theme";
import { Product } from "src/shared/types";
import { Container, PageLayout } from "src/shared/ui";
import { ProductCard, SelectField, Tabs } from "src/shared/ui";

import {
  NUMBER_SELECT_DATA,
  STRING_SELECT_DATA,
  TABS_DATA,
} from "./contstants";
import { useQueryParams } from "./hooks";
import { filterSort } from "./hooks/helpers";
import { searchInputStyles } from "./styled";

type ProductsPageProps = {
  data: Product[];
};

export const ProductsPage = ({ data }: ProductsPageProps) => {
  const navigate = useNavigate();
  const theme = useTheme();

  const goToProductPage = (id: number) => navigate(`${ROUTES.products}${id}`);

  const { onChange, setParam, searchParams } = useQueryParams();

  return (
    <Container>
      <PageLayout gap={32} justify="start">
        <Typography.Title level={2}>Товары</Typography.Title>

        <Input.Search
          placeholder="Введите название товара"
          enterButton="Искать"
          className={searchInputStyles(theme)}
          onChange={onChange}
          allowClear
        />

        <Tabs
          items={TABS_DATA}
          type="card"
          onChange={(value) => setParam("_type", value)}
          defaultActiveKey={searchParams.get("_type") ?? TABS_DATA?.[0].key}
        />

        <Flex wrap="wrap" gap={SPACE.gap12}>
          <SelectField
            label="Сортировать по цене"
            options={NUMBER_SELECT_DATA}
            defaultValue={
              searchParams.get("_price") ?? NUMBER_SELECT_DATA?.[0].value
            }
            onChange={(value) => setParam("_price", value)}
          />
          <SelectField
            label="Сортировать по названию"
            options={STRING_SELECT_DATA}
            defaultValue={
              searchParams.get("_title") ?? STRING_SELECT_DATA?.[0].value
            }
            onChange={(value) => setParam("_title", value)}
          />
          <SelectField
            label="Сортировать по остатку"
            options={NUMBER_SELECT_DATA}
            defaultValue={
              searchParams.get("_balance") ?? NUMBER_SELECT_DATA?.[0].value
            }
            onChange={(value) => setParam("_balance", value)}
          />
        </Flex>

        <Row gutter={[SPACE.gap12, SPACE.gap12]}>
          {filterSort(searchParams, data).map((item) => (
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
