import { Button, Form, Input, Typography } from "antd";
import { Container } from "src/shared/ui";
import { FormType } from "./types";
import { Layout, FormContainer } from "./styled";

export const LoginPage = () => {
  return (
    <Container>
      <Layout>
        <FormContainer>
          <Typography.Title level={2}>Вход</Typography.Title>
          <Form layout="vertical">
            <Form.Item<FormType> label="Email" name="email">
              <Input placeholder="Введите email" />
            </Form.Item>
            <Form.Item<FormType> label="Пароль" name="password">
              <Input placeholder="Введите пароль" type="password" />
            </Form.Item>
            <Button type="primary">Войти</Button>
          </Form>
        </FormContainer>
      </Layout>
    </Container>
  );
};
