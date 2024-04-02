export type CreateTaskDTO = {
  title: string;
  description: string;
  userId: string;
};

export type UpdateTaskDTO = {
  title: string;
  description: string;
  createdAt: Date;
  isCompleted: boolean;
};
