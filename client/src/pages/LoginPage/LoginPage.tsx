import { Button, Form, Input, Typography } from "antd";
import { Container } from "./styled";

type FormType = {
  email: string;
  password: string;
};

export const LoginPage = () => {
  return (
    <>
      <Container xs={24} md={16} lg={12}>
        <Typography.Title level={2}>Вход</Typography.Title>
        <Form layout="vertical">
          <Form.Item<FormType> label="Email" name="email">
            <Input placeholder="Введите email" />
          </Form.Item>
          <Form.Item<FormType> label="Пароль" name="password">
            <Input placeholder="Введите пароль" type="password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary">Войти</Button>
          </Form.Item>
        </Form>
      </Container>
    </>
  );
};
