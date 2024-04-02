import { cleanEnv, port, str } from "envalid";

export const ENV = cleanEnv(process.env, {
  ACCESS_SECRET: str(),
  API_PORT: port(),
  CLIENT_ORIGIN: str(),
});
