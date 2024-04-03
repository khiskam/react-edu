import { loginSchema, registerSchema } from "./validation";
import { validateMiddleware } from "@app/middleware/validate";
import { RequestHandler } from "express";
import { Router } from "express";
import { Handler } from "../handler";

export class UserHandler implements Handler {
  private readonly _path = "/";
  private _router: Router;

  constructor() {
    this._router = Router();

    this.initRoutes();
  }

  private initRoutes = () => {
    this._router.get(
      "/login",
      validateMiddleware(registerSchema),
      this.handlerLogin
    );
    this._router.post(
      "/register",
      validateMiddleware(loginSchema),
      this.handleRegister
    );
  };

  private handleRegister: RequestHandler = async (req, res) => {
    res.status(200).json();
  };

  private handlerLogin: RequestHandler = async (req, res) => {
    res.status(200).json();
  };

  get router() {
    return this._router;
  }

  get path() {
    return this._path;
  }
}
