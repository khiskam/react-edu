import bcrypt from "bcrypt";

export class Password {
  private static readonly _salt: 10;

  static async hash(password: string) {
    return await bcrypt.hash(password, this._salt);
  }

  static async compare(password: string, cmpPassword: string) {
    return await bcrypt.compare(password, cmpPassword);
  }
}
