import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Card, Col, Modal, Row, Tag, Typography } from "antd";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "src/shared/constants";
import { SPACE } from "src/shared/theme";

import { cardStyles } from "./styled";
import { TaskCardProps } from "./types";

export const TaskCard = ({ data }: TaskCardProps) => {
  const [open, setOpen] = useState(false);

  const handleModaleClose = () => setOpen(false);
  const handleModaleOpen = () => setOpen(true);

  return (
    <Card
      title={<Typography.Text title={data.title}>{data.title}</Typography.Text>}
      hoverable
      className={cardStyles}
      actions={[
        <NavLink to={ROUTES.editTask(data.id)}>
          <EditOutlined key="edit" />
        </NavLink>,
        <DeleteOutlined key="delete" onClick={handleModaleOpen} />,
      ]}
    >
      <Row gutter={[SPACE.gap12, SPACE.gap12]}>
        <Col>
          {data.isCompleted ? (
            <Tag color="blue">выполнено</Tag>
          ) : (
            <Tag color="red">необходимо выполнить</Tag>
          )}
        </Col>
        <Col span={24}>
          <Typography.Text>{data.description}</Typography.Text>
        </Col>
        <Col span={24}>
          <Typography.Text strong>Дата создания: </Typography.Text>
          <Typography.Text>
            {data.createdAt.toLocaleDateString()}
          </Typography.Text>
        </Col>
        <Col span={24}>
          <Typography.Text strong>Дата изменения: </Typography.Text>
          <Typography.Text>
            {data.updatedAt.toLocaleDateString()}
          </Typography.Text>
        </Col>
      </Row>

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
        <Typography.Text ellipsis={true} title={data.title}>
          Вы уверены, что хотите удалить задачу "{data.title}"?
        </Typography.Text>
      </Modal>
    </Card>
  );
};
