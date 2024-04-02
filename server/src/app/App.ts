import { PrismaClient } from "@prisma/client";
import express, { Application } from "express";
import { prisma } from "@app/config/db";

export class App {
  private _express: Application;
  private _port: number;
  private _dbClient: PrismaClient;

  constructor(port: number) {
    this._express = express();
    this._port = port;
    this._dbClient = prisma;
  }

  public listen() {
    this._express.listen(this._port, () => {
      console.log(`listening on the port: ${this._port}`);
    });
  }
}
