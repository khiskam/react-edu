import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Form, Input, Typography } from "antd";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Container, FormContainer, PageLayout } from "src/shared/ui";

import { FormType, schema } from "./types";

export const RegisterPage = () => {
  const { handleSubmit, control } = useForm<FormType>({
    defaultValues: { email: "", password: "", confirmPassword: "" },
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<FormType> = (data) => console.log(data);

  return (
    <Container>
      <PageLayout justify="center">
        <FormContainer>
          <Typography.Title level={2}>Регистрация</Typography.Title>
          <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
            <Controller
              control={control}
              name="email"
              render={({
                field: { value, name, onChange },
                fieldState: { error },
              }) => (
                <Form.Item<FormType>
                  label="Email"
                  name="email"
                  validateStatus={error?.message ? "error" : "validating"}
                  help={error?.message}
                >
                  <Input
                    placeholder="Введите email"
                    value={value}
                    name={name}
                    onChange={onChange}
                    id={name}
                  />
                </Form.Item>
              )}
            />
            <Controller
              control={control}
              name="password"
              render={({
                field: { value, name, onChange },
                fieldState: { error },
              }) => (
                <Form.Item<FormType>
                  label="Пароль"
                  name="password"
                  validateStatus={error?.message ? "error" : "validating"}
                  help={error?.message}
                >
                  <Input.Password
                    autoComplete="on"
                    placeholder="Введите пароль"
                    value={value}
                    name={name}
                    onChange={onChange}
                    id={name}
                  />
                </Form.Item>
              )}
            />
            <Controller
              control={control}
              name="confirmPassword"
              render={({
                field: { value, name, onChange },
                fieldState: { error },
              }) => (
                <Form.Item<FormType>
                  label="Подтвердить пароль"
                  name="confirmPassword"
                  validateStatus={error?.message ? "error" : "validating"}
                  help={error?.message}
                >
                  <Input.Password
                    autoComplete="on"
                    placeholder="Подтвердит пароль"
                    value={value}
                    name={name}
                    onChange={onChange}
                    id={name}
                  />
                </Form.Item>
              )}
            />
            <Button type="primary" htmlType="submit">
              Зарегистрироваться
            </Button>
          </Form>
        </FormContainer>
      </PageLayout>
    </Container>
  );
};
