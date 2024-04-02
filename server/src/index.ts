import "module-alias/register";
import { cleanEnv, str } from "envalid";

const env = cleanEnv(process.env, {
  INITIALS: str(),
});

console.log(env);
