type ErrorType = "user" | "db";

export class DBError extends Error {
  public readonly message: string;
  public readonly type: ErrorType;

  private constructor(message: string, type: ErrorType) {
    super(message);

    this.message = message;
    this.type = type;
  }

  static CreateUserError(message: string) {
    throw new DBError(message, "user");
  }

  static CreateDBError(message: string) {
    throw new DBError(message, "db");
  }
}
