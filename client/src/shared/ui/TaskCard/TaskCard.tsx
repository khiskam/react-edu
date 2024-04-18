import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Card, Descriptions, Flex, Modal, Tag, Typography } from "antd";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDeleteMutation } from "src/shared/api";
import { ROUTES } from "src/shared/constants";
import { SPACE } from "src/shared/theme";

import { cardStyles } from "./styled";
import { TaskCardProps } from "./types";

const { Text, Paragraph } = Typography;

export const convertToDate = (date: Date | string) => {
  if (typeof date === "string") {
    return new Date(Date.parse(date)).toLocaleString();
  }

  return date.toLocaleString();
};

export const TaskCard = ({ data }: TaskCardProps) => {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const { mutateAsync: remove } = useDeleteMutation();

  const onOk = async () => {
    handleModaleClose();
    await remove(data.id);
  };
  const handleModaleClose = () => setOpen(false);
  const handleModaleOpen = () => setOpen(true);

  return (
    <Card
      title={<Text ellipsis={{ tooltip: data.title }}>{data.title}</Text>}
      hoverable
      className={cardStyles}
      actions={[
        <NavLink to={ROUTES.editTask(data.id)}>
          <EditOutlined key="edit" />
        </NavLink>,
        <DeleteOutlined key="delete" onClick={handleModaleOpen} />,
      ]}
    >
      <Flex gap={SPACE.gap12} vertical>
        <div>
          {data.isCompleted ? (
            <Tag color="blue">выполнено</Tag>
          ) : (
            <Tag color="red">необходимо выполнить</Tag>
          )}
        </div>
        <Paragraph
          style={{ WebkitLineClamp: 2 }}
          ellipsis={{
            rows: 1,
            expandable: "collapsible",
            expanded,
            onExpand: (_, info) => setExpanded(info.expanded),
            symbol: (expanded: boolean) =>
              expanded ? (
                <Text type="secondary">Свернуть</Text>
              ) : (
                <Text type="secondary">Развернуть</Text>
              ),
          }}
        >
          {data.description}
        </Paragraph>

        <Descriptions
          column={{ xxl: 2, xl: 2, lg: 1, md: 2, sm: 2, xs: 1 }}
          layout="vertical"
        >
          <Descriptions.Item label="Дата создания">
            {convertToDate(data.createdAt)}
          </Descriptions.Item>
          <Descriptions.Item label="Дата изменения">
            {convertToDate(data.updatedAt)}
          </Descriptions.Item>
        </Descriptions>
      </Flex>

      <Modal
        title="Удаление"
        open={open}
        okButtonProps={{ danger: true }}
        okText="Удалить"
        onOk={onOk}
        onCancel={handleModaleClose}
        cancelText="Отменить"
        footer={(_, { OkBtn, CancelBtn }) => (
          <>
            <OkBtn />
            <CancelBtn />
          </>
        )}
      >
        <Text ellipsis={{ tooltip: true }} title={data.title}>
          Вы уверены, что хотите удалить задачу "{data.title}"?
        </Text>
      </Modal>
    </Card>
  );
};
