import { PlusOutlined } from "@ant-design/icons";
import { useTheme } from "@emotion/react";
import { Button, Col, Flex, Input, Row, Typography } from "antd";
import { NavLink } from "react-router-dom";
import { useGetAllQuery } from "src/shared/api";
import { ROUTES } from "src/shared/constants";
import { SPACE } from "src/shared/theme";
import { Container, PageLayout } from "src/shared/ui";
import { SelectField, Tabs, TaskCard } from "src/shared/ui";

import { DATE_SELECT_DATA, TABS_DATA, TITLE_SELECT_DATA } from "./contstants";
import { useQueryParams } from "./hooks";
import { searchInputStyles } from "./styled";

export const TasksPage = () => {
  const theme = useTheme();

  const { data } = useGetAllQuery("");
  console.log(data);

  const { onChange, setParam, searchParams } = useQueryParams();

  if (!data) {
    return null;
  }

  return (
    <Container>
      <PageLayout gap={32}>
        <Typography.Title level={2}>Задачи</Typography.Title>

        <Flex gap={SPACE.gap12} wrap="wrap">
          <Input.Search
            placeholder="Введите название задачи"
            enterButton="Искать"
            className={searchInputStyles(theme)}
            onChange={onChange}
            allowClear
          />
          <NavLink to={ROUTES.createTask}>
            <Button type="primary" icon={<PlusOutlined />}>
              Добавить задачу
            </Button>
          </NavLink>
        </Flex>

        <Tabs
          items={TABS_DATA}
          type="card"
          onChange={(value) => setParam("_type", value)}
          defaultActiveKey={searchParams.get("_type") ?? TABS_DATA?.[0].key}
        />

        <Flex wrap="wrap" gap={SPACE.gap12}>
          <SelectField
            label="Сортировать по названию"
            options={TITLE_SELECT_DATA}
            defaultValue={
              searchParams.get("_title") ?? TITLE_SELECT_DATA?.[0].value
            }
            onChange={(value) => setParam("_title", value)}
          />
          <SelectField
            label="Сортировать по дате"
            options={DATE_SELECT_DATA}
            defaultValue={
              searchParams.get("_date") ?? DATE_SELECT_DATA?.[0].value
            }
            onChange={(value) => setParam("_date", value)}
          />
        </Flex>

        <Row gutter={[SPACE.gap12, SPACE.gap12]}>
          {data.tasks.map((item) => (
            <Col key={item.id} sm={24} lg={12}>
              <TaskCard data={item} />
            </Col>
          ))}
        </Row>
      </PageLayout>
    </Container>
  );
};
