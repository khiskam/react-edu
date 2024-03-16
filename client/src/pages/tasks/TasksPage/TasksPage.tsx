import { useTheme } from "@emotion/react";
import { Button, Col, Flex, Input, Row, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "src/shared/constants";
import { SPACE } from "src/shared/theme";
import { Container, PageLayout } from "src/shared/ui";
import { SelectField, Tabs, TaskCard } from "src/shared/ui";

import { data } from "../data";
import { DATE_SELECT_DATA, TABS_DATA, TITLE_SELECT_DATA } from "./contstants";
import { searchInputStyles } from "./styled";

export const TasksPage = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const goToConcretePage = (id: number) => navigate(`${ROUTES.tasks}/${id}`);
  const goToCreatePage = () => navigate(`${ROUTES.tasks}/create`);

  return (
    <Container>
      <PageLayout gap={32} justify="start">
        <Typography.Title level={2}>Задачи</Typography.Title>

        <Input.Search
          placeholder="Искать"
          enterButton="Искать"
          className={searchInputStyles(theme)}
        />

        <Tabs items={TABS_DATA} type="card" />

        <Flex wrap="wrap" gap={12}>
          <SelectField label="Фильтация по дате" options={DATE_SELECT_DATA} />
          <SelectField
            label="Фильтрация по названию"
            options={TITLE_SELECT_DATA}
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
