import { z } from "zod";

export const createUserSchema = z.object({
  title: z.string().min(1, "Поле Заголовок обязательно для заполнения"),
  description: z
    .string()
    .min(1, "Поле Описание обязательно для заполнения")
    .max(1024, "Максимальное кол-во символов в поле Описание 1024"),
});

export const updateTaskSchema = z.object({
  title: z.string().min(1, "Поле Заголовок обязательно для заполнения"),
  description: z
    .string()
    .min(1, "Поле Описание обязательно для заполнения")
    .max(1024, "Максимальное кол-во символов в поле Описание 1024"),
  isCompleted: z.boolean(),
});
