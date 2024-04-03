export type User = {
  id: string;
  email: string;
  password?: string;
};

export type UserKeys = keyof User;
