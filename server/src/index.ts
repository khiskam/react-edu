import "module-alias/register";
import express, { json } from "express";
import cors from "cors";
import userRouter from "@app/routes/User/router.js";
import { ENV } from "@app/config/env.js";

const app = express();

const corsOptions: cors.CorsOptions = {
  origin: ENV.clientURL,
};

app.use(cors(corsOptions));
app.use(json());
app.use(userRouter);

app.get("/");

app.listen(ENV.port, () => {
  console.log(`Running on port ${ENV.port}`);
});
