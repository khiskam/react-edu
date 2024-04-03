import { UserKeys } from "@domain/user";
import { CreateUserDTO } from "@services/user/dto";
import { IUserRepository } from "@services/user/interfaces";
import { ClientError } from "@services/utils/client.error";
import { Password } from "@services/utils/password";

export class UserService {
  constructor(private readonly _repo: IUserRepository) {}

  async register(user: CreateUserDTO) {
    user.password = await Password.hash(user.password);
    return this._repo.create(user);
  }

  async login(email: string, password: string) {
    const user = await this._repo.getByEmail(email);

    if (!user) {
      throw new ClientError<UserKeys>(
        `Пользователя с email ${email} не существует`,
        "email"
      );
    }

    if (!(await Password.compare(password, user.password))) {
      throw new ClientError<UserKeys>("Неверный пароль", "password");
    }

    return user;
  }
}
