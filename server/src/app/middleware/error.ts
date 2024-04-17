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
    switch (err.code) {
      case 401:
      case 404:
      case 500:
        return res.sendStatus(err.code);
      default:
        return res
          .status(err.code)
          .json({ errors: { [err.field]: err.message } });
    }
  }

  res.sendStatus(500);
};
