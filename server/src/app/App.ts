import express, { Application, json } from "express";
import { Handler } from "./handlers/handler";
import { errorMiddleware } from "./middleware/error";

export class App {
  private _express: Application;
  private _port: number;

  constructor(port: number, ...handlers: Handler[]) {
    this._express = express();
    this._port = port;

    this._express.use(json());

    this.initHandlers(handlers);
    this._express.use(errorMiddleware);
  }

  private initHandlers = (handlers: Handler[]) => {
    handlers.forEach((handler) => {
      this._express.use(handler.path, handler.router);
    });
  };

  public listen() {
    this._express.listen(this._port, () => {
      console.log(`listening on the port: ${this._port}`);
    });
  }
}
