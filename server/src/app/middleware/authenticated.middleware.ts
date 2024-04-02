import { Token } from "@services/utils/token";
import { Request, Response, NextFunction, RequestHandler } from "express";

export const authenticatedMiddleware: RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization?.split(" ")[1];

  if (!authHeader) {
    return res.sendStatus(401);
  }

  try {
    const payload = Token.verify(authHeader);
    if (typeof payload === "object") {
      res.locals.user = { id: payload.sub, email: payload.email };
    }

    // проверить пользовате
    next();
  } catch (e) {
    return res.sendStatus(401);
  }
};
