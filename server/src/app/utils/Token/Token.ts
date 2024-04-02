import { ENV } from "@app/config/env.js";
import jwt from "jsonwebtoken";

export class Token {
  static create(id: string, email: string) {
    const token = jwt.sign({ email }, ENV.accessSecret, {
      algorithm: "HS256",
      subject: `${id}`,
      expiresIn: "7d",
    });

    return token;
  }

  static verify(token: string) {
    console.log(typeof jwt.decode(token));
    return jwt.verify(token, ENV.accessSecret);
  }
}
