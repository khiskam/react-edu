import { ClientError } from "@services/utils/client.error";
import { Request, Response, NextFunction } from "express";

type func = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => void;

export const errorMiddleware: func = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof ClientError) {
    return res.status(400).json({ errors: { [err.field]: err.message } });
  }

  res.sendStatus(500);
};
