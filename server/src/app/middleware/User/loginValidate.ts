import { Request, Response, NextFunction, RequestHandler } from "express";
import { Validator } from "@app/utils/Validator/Validator.js";
import { loginSchema } from "./schemas.js";

export const loginValidate: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result = await loginSchema.safeParseAsync(req.body);

  if (!result.success) {
    return res
      .status(400)
      .json({ errors: Validator.getErrors(result.error.errors) });
  }

  next();
};
