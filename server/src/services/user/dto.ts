export type CreateUserDTO = {
  email: string;
  password: string;
};

export type GetUserByEmailResultDTO = {
  email: string;
  password: string;
};

export type GetUserByIDDTO = {
  id: string;
  email: string;
};
