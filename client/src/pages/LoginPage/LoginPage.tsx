import { Button, Form, Input, Typography } from "antd";
import { Container, FormContainer, PageLayout } from "src/shared/ui";
import { FormType } from "./types";

export const LoginPage = () => {
  return (
    <Container>
      <PageLayout justify="center">
        <FormContainer>
          <Typography.Title level={2}>Вход</Typography.Title>
          <Form layout="vertical">
            <Form.Item<FormType> label="Email" name="email">
              <Input placeholder="Введите email" />
            </Form.Item>
            <Form.Item<FormType> label="Пароль" name="password">
              <Input.Password placeholder="Введите пароль" />
            </Form.Item>
            <Button type="primary">Войти</Button>
          </Form>
        </FormContainer>
      </PageLayout>
    </Container>
  );
};
