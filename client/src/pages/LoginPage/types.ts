import { object, string, InferType } from "yup";

export const schema = object({
  email: string().required("Поле обязательно для заполнения"),
  password: string().required("Поле обязательно для заполнения"),
});

export type FormType = InferType<typeof schema>;
