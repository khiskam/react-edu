import { Prisma, PrismaClient } from "@prisma/client";
import { User } from "@entities/User.js";
import { IUserRepository } from "@services/User/IUserRepository.js";
import { CreateUserDTO, GetUserDTO } from "@services/User/dtos/UserDTO.js";
import { AppError } from "@app/utils/Error/Error.js";
import { PRISMA_CODES } from "./constants.js";

export class UserRepository implements IUserRepository {
  constructor(private readonly _client: PrismaClient) {}

  async create(user: CreateUserDTO): Promise<User> {
    try {
      const result = await this._client.user.create({ data: user });
      return new User(result.id, result.email);
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === PRISMA_CODES.unique) {
          throw new AppError({
            email: `Пользователь с email ${user.email} уже существует`,
          });
        }
      }

      throw e;
    }
  }

  async getByEmail(email: string): Promise<GetUserDTO | null> {
    const result = await this._client.user.findFirst({
      where: {
        email,
      },
    });

    if (!result) {
      return null;
    }

    return result;
  }
}
