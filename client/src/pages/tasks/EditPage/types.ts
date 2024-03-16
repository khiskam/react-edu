import { boolean, InferType, object, string } from "yup";

export const schema = object({
  title: string().required("Поле обязательно для заполнения"),
  description: string().required("Поле обязательно для заполнения"),
  isCompleted: boolean(),
});

export type FormType = InferType<typeof schema>;
