import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Form, Input, Typography } from "antd";
import { AxiosError } from "axios";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useLoginMutation } from "src/shared/api";
import { Container, FormContainer, PageLayout } from "src/shared/ui";

import { FormType, FormTypeKeys, schema } from "./types";

export const LoginPage = () => {
  const { handleSubmit, control, setError } = useForm<FormType>({
    defaultValues: { email: "", password: "" },
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const { mutateAsync: login } = useLoginMutation();

  const onSubmit: SubmitHandler<FormType> = async (data) => {
    try {
      await login(data);
    } catch (e) {
      if (e instanceof AxiosError) {
        const errors: Partial<FormType> = e.response?.data.errors;
        let item: FormTypeKeys;
        for (item in errors) {
          setError(item, { message: errors[item] });
        }
      }
    }
  };

  return (
    <Container>
      <PageLayout justify="center" align="center">
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
            <Button type="primary" htmlType="submit">
              Войти
            </Button>
          </Form>
        </FormContainer>
      </PageLayout>
    </Container>
  );
};
