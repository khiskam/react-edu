import "module-alias/register";
import { App } from "@app/App";
import { ENV } from "./env";

const app = new App(ENV.API_PORT);
app.listen();
