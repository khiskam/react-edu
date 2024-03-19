import { useTheme } from "@emotion/react";
import { useDebounceFn } from "ahooks";
import { Button, Col, Flex, Input, Row, Typography } from "antd";
import { useLayoutEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { ROUTES } from "src/shared/constants";
import { SPACE } from "src/shared/theme";
import { Container, PageLayout } from "src/shared/ui";
import { SelectField, Tabs, TaskCard } from "src/shared/ui";

import { data } from "../data";
import {
  DATE_SELECT_DATA,
  FILTER_MAP,
  Sort,
  SORT_MAP,
  TABS_DATA,
  TITLE_SELECT_DATA,
} from "./contstants";
import { searchInputStyles } from "./styled";

const setParams = (
  prev: URLSearchParams,
  pairs: [key: string, value: string][]
) => ({
  ...Object.fromEntries(prev.entries()),
  ...Object.fromEntries(pairs),
});

export const TasksPage = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [searchParams, setSearchParams] = useSearchParams(useLocation().search);
  const [search, setSearch] = useState(searchParams.get("search"));
  const { run } = useDebounceFn((value: string) => setSearch(value), {
    wait: 400,
  });

  useLayoutEffect(() => {
    const sort: { sort: string[]; order: string[] } = { sort: [], order: [] };
    const filter: string[] = [];

    searchParams.forEach((value, key) => {
      if (key in SORT_MAP) {
        if (value === Sort.Asc) {
          sort.sort.push(SORT_MAP[key]);
          sort.order.push("asc");
        } else if (value === Sort.Desc) {
          sort.sort.push(SORT_MAP[key]);
          sort.order.push("desc");
        }
      } else if (key in FILTER_MAP) {
        const v = FILTER_MAP[key].values.find((item) => value === item);

        if (v) {
          filter.push(`${FILTER_MAP[key].key}=${v}`);
        }
      }

      const query: string[] = [];

      if (sort.sort.length > 0) {
        query.push(
          `_sort=${sort.sort.join(",")}`,
          `_order=${sort.order.join(",")}`
        );
      }

      if (filter.length > 0) {
        query.push(filter.join(","));
      }

      if (query.length > 0) {
        console.log(`?${query.join("&")}`);
      }
    });
  }, [searchParams, search]);

  const goToConcretePage = (id: number) => navigate(`${ROUTES.tasks}/${id}`);
  const goToCreatePage = () => navigate(`${ROUTES.tasks}/create`);

  return (
    <Container>
      <PageLayout gap={32} justify="start">
        <Typography.Title level={2}>Задачи</Typography.Title>

        <Input.Search
          placeholder="Введите название задачи"
          enterButton="Искать"
          className={searchInputStyles(theme)}
          onChange={(e) => run(e.target.value)}
          onSearch={(value) => {
            setSearchParams((prev) => setParams(prev, [["search", value]]));
          }}
          allowClear
        />

        <Tabs
          items={TABS_DATA}
          type="card"
          onChange={(activeKey) =>
            setSearchParams((prev) => setParams(prev, [["_ftype", activeKey]]))
          }
        />

        <Flex wrap="wrap" gap={SPACE.gap12}>
          <SelectField
            label="Сортировать по названию"
            options={TITLE_SELECT_DATA}
            defaultValue={TITLE_SELECT_DATA?.[0].value}
            onChange={(value) =>
              setSearchParams((prev) => setParams(prev, [["_stitle", value]]))
            }
          />
          <SelectField
            label="Сортировать по дате"
            options={DATE_SELECT_DATA}
            defaultValue={DATE_SELECT_DATA?.[0].value}
            onChange={(value) =>
              setSearchParams((prev) => setParams(prev, [["_sdate", value]]))
            }
          />
        </Flex>

        <Row gutter={[SPACE.gap12, SPACE.gap12]}>
          {data.map((item) => (
            <Col key={item.id} sm={24} lg={12}>
              <TaskCard data={item} onClick={() => goToConcretePage(item.id)} />
            </Col>
          ))}
        </Row>

        <Button type="primary" onClick={goToCreatePage}>
          Добавить задачу
        </Button>
      </PageLayout>
    </Container>
  );
};
