import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Form, Input, Typography } from "antd";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Container, FormContainer, PageLayout } from "src/shared/ui";

import { FormType, schema } from "./types";

export const CreatePage = () => {
  const { handleSubmit, control } = useForm<FormType>({
    defaultValues: { title: "", description: "" },
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<FormType> = (data) => console.log(data);

  return (
    <Container>
      <PageLayout justify="center">
        <FormContainer>
          <Typography.Title level={2}>Добавить задачу</Typography.Title>
          <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
            <Controller
              control={control}
              name="title"
              render={({
                field: { value, name, onChange },
                fieldState: { error },
              }) => (
                <Form.Item<FormType>
                  label="Имя"
                  name="title"
                  validateStatus={error?.message ? "error" : "validating"}
                  help={error?.message}
                >
                  <Input
                    placeholder="Введите имя"
                    value={value}
                    name={name}
                    onChange={onChange}
                  />
                </Form.Item>
              )}
            />
            <Controller
              control={control}
              name="description"
              render={({
                field: { value, name, onChange },
                fieldState: { error },
              }) => (
                <Form.Item<FormType>
                  label="Описание"
                  name="description"
                  validateStatus={error?.message ? "error" : "validating"}
                  help={error?.message}
                >
                  <Input.TextArea
                    placeholder="Введите описание"
                    value={value}
                    name={name}
                    onChange={onChange}
                  />
                </Form.Item>
              )}
            />
            <Button type="primary" htmlType="submit">
              Добавить
            </Button>
          </Form>
        </FormContainer>
      </PageLayout>
    </Container>
  );
};
