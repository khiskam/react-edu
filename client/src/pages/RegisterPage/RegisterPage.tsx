import { Container } from "src/shared/ui";
import { Layout, FormContainer } from "./styled";
import { Button, Form, Input, Typography } from "antd";
import { FormType } from "./types";

export const RegisterPage = () => {
  return (
    <Container>
      <Layout>
        <FormContainer>
          <Typography.Title level={2}>Регистрация</Typography.Title>
          <Form layout="vertical">
            <Form.Item<FormType> label="Email" name="email">
              <Input placeholder="Введите email" />
            </Form.Item>
            <Form.Item<FormType> label="Пароль" name="password">
              <Input placeholder="Введите пароль" type="password" />
            </Form.Item>
            <Form.Item<FormType>
              label="Подтвердить пароль"
              name="confirmPassword"
            >
              <Input placeholder="Введите пароль" type="password" />
            </Form.Item>
            <Button type="primary">Зарегистрироваться</Button>
          </Form>
        </FormContainer>
      </Layout>
    </Container>
  );
};
