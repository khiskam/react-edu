import { ENV } from "../../env";
import jwt from "jsonwebtoken";

export class Token {
  static create(id: string, email: string) {
    const token = jwt.sign({ email }, ENV.ACCESS_SECRET, {
      algorithm: "HS256",
      subject: `${id}`,
      expiresIn: "7d",
    });

    return token;
  }

  static verify(token: string) {
    return jwt.verify(token, ENV.ACCESS_SECRET);
  }
}
