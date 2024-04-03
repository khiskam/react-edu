import { z } from "zod";

export const registerSchema = z
  .object({
    email: z
      .string({
        required_error: "Поле Email обязательно для заполнения",
      })
      .email("Неверный формат email"),
    password: z
      .string({
        required_error: "Поле Пароль обязательно для заполнения",
      })
      .min(6, "Минимальное кол-во символов для поля Пароль: 6"),
    confirmPassword: z.string({
      required_error: "Поле Повторить пароль обязательно для заполнения",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Пароли не совпадают",
    path: ["confirmPassword"],
  });

export const loginSchema = z.object({
  email: z.string().min(1, "Поле Email обязательно для заполнения"),
  password: z.string().min(1, "Поле Пароль обязательно для заполнения"),
});
