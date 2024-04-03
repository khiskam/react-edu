export class ApiError<T> extends Error {
  public readonly message: string;
  public readonly statusCode: number;
  public readonly field: T;

  constructor(message: string, field: T, statusCode: number) {
    super(message);

    this.message = message;
    this.statusCode = statusCode;
    this.field = field;
  }

  static BadRequest<T>(message: string, field: T) {
    throw new ApiError(message, field, 400);
  }
}
