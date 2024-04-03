export type CreateUserDTO = {
  email: string;
  password: string;
};

export type GetUserByEmailResultDTO = {
  id: string;
  email: string;
  password: string;
};

export type GetUserByIdDTO = {
  id: string;
  email: string;
};
