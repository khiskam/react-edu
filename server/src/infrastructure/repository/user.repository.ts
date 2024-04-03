import { User, UserKeys } from "@domain/user";
import { Prisma, PrismaClient } from "@prisma/client";
import { CreateUserDTO, GetUserByEmailResultDTO } from "@services/user/dto";
import { IUserRepository } from "@services/user/interfaces";
import { ClientError } from "@services/utils/client.error";

export class UserRepository implements IUserRepository {
  constructor(private readonly _client: PrismaClient) {}

  async create(user: CreateUserDTO): Promise<User> {
    try {
      return await this._client.user.create({ data: user });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === "P2002") {
          throw new ClientError<UserKeys>(
            `Пользователь ${user.email} уже существует`,
            "email"
          );
        }
      }

      throw e;
    }
  }

  async getByEmail(email: string): Promise<GetUserByEmailResultDTO | null> {
    return this._client.user.findFirst({ where: { email } });
  }

  async existsByPayload(id: string, email: string): Promise<User | null> {
    return this._client.user.findFirst({ where: { id, email } });
  }
}
