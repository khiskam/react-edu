import { cleanEnv, port, str } from "envalid";

export const ENV = cleanEnv(process.env, {
  ACCESS_SECRET: str(),
  API_PORT: port({ default: 3000 }),
  CLIENT_ORIGIN: str(),
});
