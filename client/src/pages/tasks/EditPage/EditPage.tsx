import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Checkbox, Form, Input, Typography } from "antd";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Container, FormContainer, PageLayout } from "src/shared/ui";

import { FormType, schema } from "./types";

export const EditPage = () => {
  const { handleSubmit, control, getValues } = useForm<FormType>({
    defaultValues: { title: "", description: "", isCompleted: false },
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<FormType> = (data) => console.log(data);

  console.log(getValues("isCompleted"));

  return (
    <Container>
      <PageLayout justify="center">
        <FormContainer>
          <Typography.Title level={2}>Изменить задачу</Typography.Title>
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
            <Controller
              control={control}
              name="isCompleted"
              render={({ field: { value, name, onChange } }) => (
                <Form.Item<FormType> name="isCompleted">
                  <Checkbox checked={value} name={name} onChange={onChange}>
                    Выполнено
                  </Checkbox>
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
