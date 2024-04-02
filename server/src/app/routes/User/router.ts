import express, { Request, Response } from "express";
import { UserService } from "@services/User/UserService.js";
import { UserRepository } from "@infrastructure/repositories/prisma/UserRepository.js";
import { PrismaClient } from "@prisma/client";
import { Token } from "@app/utils/Token/Token.js";
import { loginValidate } from "@app/middleware/User/loginValidate.js";
import { registerValidate } from "@app/middleware/User/registerValidate.js";
import { AppError } from "@app/utils/Error/Error.js";

const router = express.Router();
export const client = new PrismaClient();

const userRepo = new UserRepository(client);
const userService = new UserService(userRepo);

router.get("/login", loginValidate, async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await userService.getByEmail(email, password);
    const token = Token.create(user.id, user.email);

    res.status(200).json({ user, token });
  } catch (e) {
    if (e instanceof AppError) {
      res.status(400).json({ errors: e.errors });
    }
  }
});

router.post(
  "/register",
  registerValidate,
  async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
      const user = await userService.create({ email, password });
      const token = Token.create(user.id, user.email);

      res.status(200).json({ user, token });
    } catch (e) {
      if (e instanceof AppError) {
        res.status(400).json(e.errors);
      }
    }
  }
);

export default router;
