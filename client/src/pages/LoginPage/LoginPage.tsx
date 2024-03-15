import { Button, Form, Input, Typography } from "antd";
import { Container, FormContainer, PageLayout } from "src/shared/ui";
import { FormType, schema } from "./types";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export const LoginPage = () => {
  const { handleSubmit, control } = useForm<FormType>({
    defaultValues: { email: "", password: "" },
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<FormType> = (data) => console.log(data);

  return (
    <Container>
      <PageLayout justify="center">
        <FormContainer>
          <Typography.Title level={2}>Вход</Typography.Title>
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
                    placeholder="Введите пароль"
                    value={value}
                    name={name}
                    onChange={onChange}
                    id={name}
                  />
                </Form.Item>
              )}
            />
            <Button type="primary" htmlType="submit">
              Войти
            </Button>
          </Form>
        </FormContainer>
      </PageLayout>
    </Container>
  );
};
