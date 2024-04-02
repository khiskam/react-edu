import { Task } from "@domain/task";
import { PrismaClient } from "@prisma/client";
import { CreateTaskDTO, UpdateTaskDTO } from "@services/task/dto";
import { ITaskRepository } from "@services/task/interfaces";

export class TaskRepository implements ITaskRepository {
  constructor(private readonly _client: PrismaClient) {}

  async getByID(id: string): Promise<Task | null> {
    return this._client.task.findFirst({ where: { id } });
  }

  async getAll(): Promise<Task[]> {
    return this._client.task.findMany();
  }

  async create(user: CreateTaskDTO): Promise<Task> {
    return this._client.task.create({ data: user });
  }

  // узнать выбрасывает ли ошибку ?
  async update(id: string, user: UpdateTaskDTO): Promise<Task> {
    return this._client.task.update({ data: user, where: { id } });
  }

  // узнать выбрасывает ли ошибку ?
  async delete(id: string): Promise<void> {
    await this._client.task.delete({ where: { id } });
  }
}
