import { validateMiddleware } from "@app/middleware/validate";
import { RequestHandler } from "express";
import { Router } from "express";
import { Handler, handleError } from "../handler";
import { createSchema, updateSchema } from "./validation";
import { authMiddleware } from "@app/middleware/auth";
import { TaskService } from "@services/task/service";
import { TaskRepository } from "@infrastructure/repository/task.repository";
import { prisma } from "@app/config/db";

export class TaskHandler implements Handler {
  private readonly _path = "/tasks";
  private _router: Router;
  private _service: TaskService;

  constructor() {
    this._router = Router();
    this._router.use(authMiddleware());

    const repo = new TaskRepository(prisma);
    this._service = new TaskService(repo);

    this.initRoutes();
  }

  private initRoutes = () => {
    this._router.get("/", handleError(this.handleGetAll));
    this._router.post(
      "/",
      validateMiddleware(createSchema),
      handleError(this.handlePost)
    );
    this._router.get("/:taskId", handleError(this.handleGetById));
    this._router.put(
      "/:taskId",
      validateMiddleware(updateSchema),
      handleError(this.handlerUpdate)
    );
    this._router.delete("/:taskId", handleError(this.handlerDelete));
  };

  private handleGetAll: RequestHandler = async (req, res) => {
    res.status(200).json();
  };

  private handleGetById: RequestHandler = async (req, res) => {
    const task = await this._service.getById(
      req.params.taskId,
      res.locals.user.id
    );

    res.status(200).json({ task });
  };

  private handlePost: RequestHandler = async (req, res) => {
    const { title, description } = req.body;

    const task = await this._service.create({
      userId: res.locals.user.id,
      title,
      description,
    });

    res.status(200).json({ task });
  };

  private handlerUpdate: RequestHandler = async (req, res) => {
    const { title, description, isCompleted } = req.body;

    const task = await this._service.update(req.params.taskId, {
      title,
      description,
      isCompleted,
    });

    res.status(200).json({ task });
  };

  private handlerDelete: RequestHandler = async (req, res) => {
    await this._service.delete(req.params.taskId, res.locals.user.id);

    res.status(200).json();
  };

  get router() {
    return this._router;
  }

  get path() {
    return this._path;
  }
}
