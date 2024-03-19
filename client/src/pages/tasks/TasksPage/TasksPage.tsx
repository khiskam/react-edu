import { useTheme } from "@emotion/react";
import { Button, Col, Flex, Input, Row, Typography } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "src/shared/constants";
import { SPACE } from "src/shared/theme";
import { Container, PageLayout } from "src/shared/ui";
import { SelectField, Tabs, TaskCard } from "src/shared/ui";

import { data as values } from "../data";
import { DATE_SELECT_DATA, TABS_DATA, TITLE_SELECT_DATA } from "./contstants";
import { useQueryParams } from "./hooks";
import { searchInputStyles } from "./styled";

export const TasksPage = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [data, setData] = useState(values);

  const goToTaskPage = (id: number) => navigate(`${ROUTES.tasks}/${id}`);
  const goToCreatePage = () => navigate(`${ROUTES.tasks}/create`);

  const { onChange, setParam } = useQueryParams();

  return (
    <Container>
      <PageLayout gap={32} justify="start">
        <Typography.Title level={2}>Задачи</Typography.Title>

        <Input.Search
          placeholder="Введите название задачи"
          enterButton="Искать"
          className={searchInputStyles(theme)}
          onChange={onChange}
          allowClear
        />

        <Tabs
          items={TABS_DATA}
          type="card"
          onChange={(value) => setParam("_type", value)}
        />

        <Flex wrap="wrap" gap={SPACE.gap12}>
          <SelectField
            label="Сортировать по названию"
            options={TITLE_SELECT_DATA}
            defaultValue={TITLE_SELECT_DATA?.[0].value}
            onChange={(value) => setParam("_title", value)}
          />
          <SelectField
            label="Сортировать по дате"
            options={DATE_SELECT_DATA}
            defaultValue={DATE_SELECT_DATA?.[0].value}
            onChange={(value) => setParam("_date", value)}
          />
        </Flex>

        <Row gutter={[SPACE.gap12, SPACE.gap12]}>
          {data.map((item) => (
            <Col key={item.id} sm={24} lg={12}>
              <TaskCard data={item} onClick={() => goToTaskPage(item.id)} />
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
