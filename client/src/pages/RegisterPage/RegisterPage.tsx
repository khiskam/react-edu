import { Container, FormContainer, PageLayout } from "src/shared/ui";
import { Button, Form, Input, Typography } from "antd";
import { FormType } from "./types";

export const RegisterPage = () => {
  return (
    <Container>
      <PageLayout justify="center">
        <FormContainer>
          <Typography.Title level={2}>Регистрация</Typography.Title>
          <Form layout="vertical">
            <Form.Item<FormType> label="Email" name="email">
              <Input placeholder="Введите email" />
            </Form.Item>
            <Form.Item<FormType> label="Пароль" name="password">
              <Input.Password placeholder="Введите пароль" />
            </Form.Item>
            <Form.Item<FormType>
              label="Подтвердить пароль"
              name="confirmPassword"
            >
              <Input.Password placeholder="Введите пароль" />
            </Form.Item>
            <Button type="primary">Зарегистрироваться</Button>
          </Form>
        </FormContainer>
      </PageLayout>
    </Container>
  );
};
