export type CreateUserDTO = {
  email: string;
  password: string;
};

export type GetUserByEmailResultDTO = {
  email: string;
  password: string;
};

export type GetUserByIdDTO = {
  id: string;
  email: string;
};
