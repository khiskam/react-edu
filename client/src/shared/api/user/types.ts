export type RegisterRequestData = {
  email: string;
  password: string;
  confirmPassword: string;
};

export type AuthResponceData = {
  user: {
    id: string;
    email: string;
  };
  token: string;
};

export type LoginData = {
  email: string;
  password: string;
};
