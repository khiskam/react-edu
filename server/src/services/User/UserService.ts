import { User } from "@entities/User.js";
import { AppError } from "@app/utils/Error/Error.js";
import { IUserRepository } from "./IUserRepository.js";
import { CreateUserDTO } from "./dtos/UserDTO.js";
import bcrypt from "bcrypt";

export class UserService {
  constructor(private readonly _repo: IUserRepository) {}

  async create(user: CreateUserDTO) {
    user.password = await bcrypt.hash(user.password, 10);
    return this._repo.create(user);
  }

  async getByEmail(email: string, password: string) {
    const user = await this._repo.getByEmail(email);

    if (!user) {
      throw new AppError({
        email: `Пользователя с email ${email} не существует`,
      });
    }

    if (!(await bcrypt.compare(password, user.password))) {
      throw new AppError({ password: "Неверный пароль" });
    }

    return new User(user.id, user.email);
  }
}
