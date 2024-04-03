import { Task } from "@domain/task";
import { CreateTaskDTO, UpdateTaskDTO } from "./dto";

export interface ITaskRepository {
  getById(id: string, userId: string): Promise<Task | null>;
  getAll(): Promise<Task[]>;
  create(user: CreateTaskDTO): Promise<Task>;
  update(id: string, user: UpdateTaskDTO): Promise<Task>;
  delete(id: string, userId: string): Promise<void>;
}
