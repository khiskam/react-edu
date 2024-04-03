// import { PrismaClient } from "@prisma/client";
import express, { Application, json } from "express";
// import { prisma } from "@app/config/db";
import { Handler } from "./handlers/handler";

export class App {
  private _express: Application;
  private _port: number;
  // private _dbClient: PrismaClient;

  constructor(port: number, ...handlers: Handler[]) {
    this._express = express();
    this._port = port;

    this._express.use(json());
    // this._dbClient = prisma;

    this.initHandlers(handlers);
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
