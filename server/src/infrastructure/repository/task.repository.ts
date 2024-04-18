import { Task, TaskKeys } from "@domain/task";
import { Prisma, PrismaClient } from "@prisma/client";

import { CreateTaskDTO, GetAllDTO, UpdateTaskDTO } from "@services/task/dto";
import { ITaskRepository } from "@services/task/interfaces";
import { ClientError } from "@services/utils/client.error";

export class TaskRepository implements ITaskRepository {
  constructor(private readonly _client: PrismaClient) {}

  async getById(id: string, userId: string): Promise<Task | null> {
    return this._client.task.findFirst({ where: { id, userId } });
  }

  async getAll(params: GetAllDTO): Promise<Task[]> {
    return this._client.task.findMany({
      where: {
        title: { contains: params.search?.title },
        userId: { equals: params.userId },
        isCompleted: { equals: params.filter?.isCompleted },
      },
      orderBy: { title: params.sort?.title, createdAt: params.sort?.createdAt },
      skip: params.offset,
      take: params.limit,
    });
  }

  async create(user: CreateTaskDTO): Promise<Task> {
    return this._client.task.create({ data: user });
  }

  async update(id: string, user: UpdateTaskDTO): Promise<Task> {
    try {
      return await this._client.task.update({ data: user, where: { id } });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === "P2025") {
          throw new ClientError<TaskKeys>(`Задача ${id} не найдена`, 404, "id");
        }
      }

      throw e;
    }
  }

  async delete(id: string, userId: string): Promise<void> {
    try {
      await this._client.task.delete({ where: { id, userId } });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === "P2025") {
          throw new ClientError<TaskKeys>(`Задача ${id} не найдена`, 404, "id");
        }
      }
      throw e;
    }
  }
}
