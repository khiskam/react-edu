import { SortingParams } from "./types";

export type CreateTaskDTO = {
  title: string;
  description: string;
  userId: string;
};

export type UpdateTaskDTO = {
  title: string;
  description: string;
  isCompleted: boolean;
};

export type QueryParams = {
  q?: string;
  type?: string;
  sort?: string;
  limit?: string;
  offset?: string;
};

export type GetAllDTO = {
  limit: number;
  offset: number;

  filter?: { isCompleted?: boolean };
  search?: { title?: string };
  sort?: SortingParams;

  userId: string;
};
