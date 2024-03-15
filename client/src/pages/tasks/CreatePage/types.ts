import { object, string, InferType } from "yup";

export const schema = object({
  title: string().required("Поле обязательно для заполнения"),
  description: string().required("Поле обязательно для заполнения"),
});

export type FormType = InferType<typeof schema>;
