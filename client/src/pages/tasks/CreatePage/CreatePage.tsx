import { Container, FormContainer, PageLayout } from "src/shared/ui";
import { Button, Form, Input, Typography } from "antd";
import { FormType } from "./types";

export const CreatePage = () => {
  return (
    <Container>
      <PageLayout justify="center">
        <FormContainer>
          <Typography.Title level={2}>Добавить задачу</Typography.Title>
          <Form layout="vertical">
            <Form.Item<FormType> label="Имя" name="title">
              <Input placeholder="Введите имя" />
            </Form.Item>
            <Form.Item<FormType> label="Описание" name="description">
              <Input.TextArea placeholder="Введите описание" />
            </Form.Item>
            <Button type="primary">Добавить</Button>
          </Form>
        </FormContainer>
      </PageLayout>
    </Container>
  );
};
