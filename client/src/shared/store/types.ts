export type User = {
  auth?: AuthData;
};

export type AuthData = {
  id: string;
  email: string;
  token: string;
};
