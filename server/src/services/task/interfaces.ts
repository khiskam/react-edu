import { Task } from "@domain/task";
import { CreateTaskDTO, UpdateTaskDTO } from "./dto";

export interface ITaskRepository {
  getByID(id: string): Promise<Task | null>;
  getAll(): Promise<Task[]>;
  create(user: CreateTaskDTO): Promise<Task>;
  update(id: string, user: UpdateTaskDTO): Promise<Task>;
  delete(id: string): Promise<void>;
}
