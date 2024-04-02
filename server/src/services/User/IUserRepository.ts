import { CreateUserDTO, GetUserDTO } from "./dtos/UserDTO.js";
import { User } from "@entities/User.js";

export interface IUserRepository {
  create(user: CreateUserDTO): Promise<User>;
  getByEmail(email: string): Promise<GetUserDTO | null>;
}
