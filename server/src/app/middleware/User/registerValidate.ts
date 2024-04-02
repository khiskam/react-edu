import { Request, Response, NextFunction, RequestHandler } from "express";
import { Validator } from "@app/utils/Validator/Validator.js";
import { registerSchema } from "./schemas.js";

export const registerValidate: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result = await registerSchema.safeParseAsync(req.body);

  if (!result.success) {
    return res
      .status(400)
      .json({ errors: Validator.getErrors(result.error.errors) });
  }

  next();
};
