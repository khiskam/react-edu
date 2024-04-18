import { loginSchema, registerSchema } from "./validation";
import { validateMiddleware } from "@app/middleware/validate";
import { RequestHandler } from "express";
import { Router } from "express";
import { Handler, handleError } from "../handler";
import { UserService } from "@services/user/service";
import { UserRepository } from "@infrastructure/repository/user.repository";
import { prisma } from "@app/config/db";
import { Token } from "@services/utils/token";
import { authMiddleware } from "@app/middleware/auth";

export class UserHandler implements Handler {
  private readonly _path = "/";
  private _router: Router;
  private _service: UserService;

  constructor() {
    this._router = Router();

    const repo = new UserRepository(prisma);
    this._service = new UserService(repo);

    this.initRoutes();
  }

  private handleRegister: RequestHandler = async (req, res) => {
    const { email, password } = req.body;

    const user = await this._service.register({ email, password });
    const token = Token.create(user.id, user.email);

    res.status(200).json({ user, token });
  };

  private handleLogin: RequestHandler = async (req, res) => {
    const { email, password } = req.body;
    const user = await this._service.login(email, password);

    const token = Token.create(user.id, user.email);

    res.status(200).json({ user, token });
  };

  private handleMe: RequestHandler = async (req, res) => {
    res.status(200).json({ user: res.locals.user, token: res.locals.token });
  };

  private initRoutes = () => {
    this._router.post(
      "/login",
      validateMiddleware(loginSchema),
      handleError(this.handleLogin)
    );
    this._router.post(
      "/register",
      validateMiddleware(registerSchema),
      handleError(this.handleRegister)
    );
    this._router.use(authMiddleware()).get("/me", this.handleMe);
  };

  get router() {
    return this._router;
  }

  get path() {
    return this._path;
  }
}
