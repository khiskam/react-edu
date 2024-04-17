import { ClientError } from "@services/utils/client.error";
import { CreateTaskDTO, UpdateTaskDTO } from "./dto";
import { ITaskRepository } from "./interfaces";
import { TaskKeys } from "@domain/task";

export class TaskService {
  constructor(private readonly _repo: ITaskRepository) {}

  async getById(id: string, userId: string) {
    const task = await this._repo.getById(id, userId);

    if (!task) {
      throw new ClientError<TaskKeys>("Задача не найдена", 404, "id");
    }

    return task;
  }

  // parse query params to options type like :
  // Options = {
  //    pagination?: {limit: number, offset: number}
  //    sort: [{fieldName: order}]
  //    filter: [{fieldName: value}]
  //    search: string
  // }
  // limit offset
  // filter
  // sort, order
  // search
  async getAll() {
    return this._repo.getAll();
  }

  async create(user: CreateTaskDTO) {
    return this._repo.create(user);
  }

  async update(id: string, user: UpdateTaskDTO) {
    return await this._repo.update(id, user);
  }

  async delete(id: string, userId: string) {
    return this._repo.delete(id, userId);
  }
}
