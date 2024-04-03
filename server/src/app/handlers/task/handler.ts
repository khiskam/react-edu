import { validateMiddleware } from "@app/middleware/validate";
import { RequestHandler } from "express";
import { Router } from "express";
import { Handler } from "../handler";
import { createSchema, updateSchema } from "./validation";
import { authMiddleware } from "@app/middleware/auth";

export class TaskHandler implements Handler {
  private readonly _path = "/tasks";
  private _router: Router;

  constructor() {
    this._router = Router();
    this._router.use(authMiddleware);

    this.initRoutes();
  }

  private initRoutes = () => {
    this._router.get("/", this.handleGetAll);
    this._router.post("/", validateMiddleware(createSchema), this.handlePost);
    this._router.get("/:taskId", this.handleGetById);
    this._router.put(
      "/:taskId",
      validateMiddleware(updateSchema),
      this.handlerUpdate
    );
    this._router.delete("/:taskId", this.handlerDelete);
  };

  private handleGetAll: RequestHandler = async (req, res) => {
    res.status(200).json();
  };

  private handleGetById: RequestHandler = async (req, res) => {
    res.status(200).json();
  };

  private handlePost: RequestHandler = async (req, res) => {
    res.status(200).json();
  };

  private handlerUpdate: RequestHandler = async (req, res) => {
    res.status(200).json();
  };

  private handlerDelete: RequestHandler = async (req, res) => {
    res.status(200).json();
  };

  get router() {
    return this._router;
  }

  get path() {
    return this._path;
  }
}
