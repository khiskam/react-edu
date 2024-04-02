import { User } from "@domain/user";
import { PrismaClient } from "@prisma/client";
import { CreateUserDTO, GetUserByEmailResultDTO } from "@services/user/dto";
import { IUserRepository } from "@services/user/interfaces";

export class UserRepository implements IUserRepository {
  constructor(private readonly _client: PrismaClient) {}

  async create(user: CreateUserDTO): Promise<User> {
    // пользователь уже существует
    return this._client.user.create({ data: user });
  }

  async getByEmail(email: string): Promise<GetUserByEmailResultDTO | null> {
    return this._client.user.findFirst({ where: { email } });
  }

  async existsByPayload(id: string, email: string): Promise<User | null> {
    return this._client.user.findFirst({ where: { id, email } });
  }
}
