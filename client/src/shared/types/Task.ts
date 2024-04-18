export type Task = {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
  createdAt: Date | string;
  updatedAt: Date | string;
};
