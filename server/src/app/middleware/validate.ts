import { Request, Response, NextFunction, RequestHandler } from "express";
import { z } from "zod";

export const validateMiddleware = <T extends z.ZodRawShape>(
  schema: z.ZodObject<T>
): RequestHandler => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const result = await schema.safeParseAsync(req.body);

    if (!result.success) {
      return res.status(400).json({
        errors: result.error.errors.reduce(
          (prev, curr) => Object.assign(prev, { [curr.path[0]]: curr.message }),
          {}
        ),
      });
    }

    next();
  };
};
