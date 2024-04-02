import { CreateTaskDTO, UpdateTaskDTO } from "./dto";
import { ITaskRepository } from "./interfaces";

export class TaskService {
  constructor(private readonly _repo: ITaskRepository) {}

  async getByID(id: string) {
    return this._repo.getByID(id);
  }

  async getAll() {
    return this._repo.getAll();
  }

  async create(user: CreateTaskDTO) {
    return this._repo.create(user);
  }

  async update(id: string, user: UpdateTaskDTO) {
    return this._repo.update(id, user);
  }

  async delete(id: string) {
    return this._repo.delete(id);
  }
}
