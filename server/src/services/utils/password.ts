import bcrypt from "bcrypt";

export class Password {
  static async hash(password: string) {
    return bcrypt.hash(password, 10);
  }

  static async compare(password: string, encrypted: string) {
    return bcrypt.compare(password, encrypted);
  }
}
