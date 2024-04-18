import { ClientError } from "@services/utils/client.error";
import { CreateTaskDTO, QueryParams, UpdateTaskDTO } from "./dto";
import { ITaskRepository } from "./interfaces";
import { TaskKeys } from "@domain/task";
import { LIMIT, OFFSET } from "./constants";
import { StringConverting } from "./StringConverting";

export class TaskService {
  constructor(private readonly _repo: ITaskRepository) {}

  async getById(id: string, userId: string) {
    const task = await this._repo.getById(id, userId);

    if (!task) {
      throw new ClientError<TaskKeys>("Задача не найдена", 404, "id");
    }

    return task;
  }

  async getAll(qp: QueryParams, userId: string) {
    const limit = StringConverting.toInteger(LIMIT, qp.limit);
    const offset = StringConverting.toInteger(OFFSET, qp.offset);
    console.log(offset * limit);
    const params = {
      userId,
      limit,
      offset: limit * offset,
      search: { title: qp.q },
      filter: { isCompleted: StringConverting.toBoolean(qp.type) },
      sort: StringConverting.toSortingArr(qp.sort),
    };

    return this._repo.getAll(params);
  }

  async create(task: CreateTaskDTO) {
    return this._repo.create(task);
  }

  async update(id: string, user: UpdateTaskDTO) {
    return await this._repo.update(id, user);
  }

  async delete(id: string, userId: string) {
    return this._repo.delete(id, userId);
  }
}
