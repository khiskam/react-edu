import { CreateUserDTO } from "@services/user/dto";
import { IUserRepository } from "@services/user/interfaces";
import { Password } from "@services/utils/password";

export class UserService {
  constructor(private readonly _repo: IUserRepository) {}

  async create(user: CreateUserDTO) {
    user.password = await Password.hash(user.password);
    return this._repo.create(user);
  }

  async getByEmail(email: string, password: string) {
    const user = await this._repo.getByEmail(email);

    // пользователь уже существует
    // неверный пароль
    console.log(password);

    return user;
  }
}
