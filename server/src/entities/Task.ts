import { User } from "./User.js";

export type Task = {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  isCompleted: boolean;
  user: User;
};
