import { InferType, object, ref, string } from "yup";

export const schema = object({
  email: string()
    .required("Поле обязательно для заполнения")
    .email("Неккоректный email"),
  password: string()
    .required("Поле обязательно для заполнения")
    .min(6, "Минимальное количество символов: ${min}"),
  confirmPassword: string()
    .required("Поле обязательно для заполнения")
    .oneOf([ref("password")], "Пароли не совпадают"),
});

export type FormType = InferType<typeof schema>;
