import { z } from "zod";

export const createSchema = z.object({
  title: z
    .string({
      required_error: "Поле Заголовок обязательно для заполнения",
    })
    .min(1, "Поле Заголовок обязательно для заполнения"),
  description: z
    .string({
      required_error: "Поле Описание обязательно для заполнения",
    })
    .min(1, "Поле Описание обязательно для заполнения")
    .max(1024, "Максимальное кол-во символов в поле Описание 1024"),
});

export const updateSchema = z.object({
  title: z
    .string({
      required_error: "Поле Заголовок обязательно для заполнения",
    })
    .min(1, "Поле Заголовок обязательно для заполнения"),
  description: z
    .string({
      required_error: "Поле Описание обязательно для заполнения",
    })
    .min(1, "Поле Описание обязательно для заполнения")
    .max(1024, "Максимальное кол-во символов в поле Описание 1024"),
  isCompleted: z.boolean({
    required_error: "Поле Выполнено обязательно для заполнения",
  }),
});
