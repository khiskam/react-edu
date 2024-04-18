import { prisma } from "@app/config/db";
import { UserRepository } from "@infrastructure/repository/user.repository";
import { UserService } from "@services/user/service";
import { ClientError } from "@services/utils/client.error";
import { Token } from "@services/utils/token";
import { Request, Response, NextFunction, RequestHandler } from "express";

export const authMiddleware = (): RequestHandler => {
  const userRepository = new UserRepository(prisma);
  const userService = new UserService(userRepository);

  return async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization?.split(" ")[1];

    if (!authHeader) {
      return res.sendStatus(401);
    }

    try {
      const payload = Token.verify(authHeader);
      if (typeof payload === "object") {
        res.locals.user = {
          id: payload.sub,
          email: payload.email,
        };
        res.locals.token = authHeader;

        if (payload.sub && payload.email) {
          await userService.existsByPayload(payload.sub, payload.email);
        } else {
          throw new ClientError("невалидный payload", 401);
        }
      }

      next();
    } catch (e) {
      return res.sendStatus(401);
    }
  };
};
