import { Button, Col, Flex, Modal, Row, Tag, Typography } from "antd";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ROUTES } from "src/shared/constants";
import { SPACE } from "src/shared/theme";
import { Container, PageLayout } from "src/shared/ui";

import { data } from "../data";

export const TaskPage = () => {
  const { taskId } = useParams();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleModaleClose = () => setOpen(false);
  const handleModaleOpen = () => setOpen(true);
  const goToEditPage = () => navigate(`${ROUTES.tasks}/${taskId}/edit`);

  const item = data[taskId ? +taskId : 1];
  return (
    <Container>
      <PageLayout gap={32}>
        <Row gutter={[SPACE.gap12, SPACE.gap12]}>
          <Col span={24}>
            <Typography.Title level={2}>{item.title}</Typography.Title>
          </Col>

          <Col span={24}>
            <Tag color={item.isCompleted ? "blue" : "red"}>
              {item.isCompleted ? "выполнено" : "необходимо выполнить"}
            </Tag>
          </Col>

          <Col span={24}>
            <Typography.Text>{item.descr}</Typography.Text>
          </Col>

          <Col span={24}>
            <Typography.Text strong>Дата изменения: </Typography.Text>
            <Typography.Text>
              {item.createdAt.toLocaleDateString()}
            </Typography.Text>
          </Col>
          <Col span={24}>
            <Flex gap={SPACE.gap4}>
              <Button type="primary" onClick={goToEditPage}>
                Редактировать
              </Button>
              <Button type="primary" danger onClick={handleModaleOpen}>
                Удалить
              </Button>
            </Flex>
          </Col>
        </Row>
        <Link to={ROUTES.tasks}>← Ко всем задачам</Link>
      </PageLayout>

      <Modal
        title="Удаление"
        open={open}
        okButtonProps={{ danger: true }}
        okText="Удалить"
        onOk={handleModaleClose}
        onCancel={handleModaleClose}
        cancelText="Отменить"
        footer={(_, { OkBtn, CancelBtn }) => (
          <>
            <OkBtn />
            <CancelBtn />
          </>
        )}
      >
        <Typography.Text>
          Вы уверены, что хотите удалить задачу?
        </Typography.Text>
      </Modal>
    </Container>
  );
};
