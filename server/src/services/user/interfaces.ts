import { User } from "@domain/user";
import { CreateUserDTO, GetUserByEmailResultDTO } from "./dto";

export interface IUserRepository {
  create(user: CreateUserDTO): Promise<User>;
  getByEmail(email: string): Promise<GetUserByEmailResultDTO | null>;
  existsByPayload(id: string, email: string): Promise<User | null>;
}
