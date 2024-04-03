import "module-alias/register";
import { App } from "@app/App";
import { ENV } from "./env";
import { UserHandler } from "@app/handlers/user/handler";
import { TaskHandler } from "@app/handlers/task/handler";

const app = new App(ENV.API_PORT, new UserHandler(), new TaskHandler());
app.listen();
