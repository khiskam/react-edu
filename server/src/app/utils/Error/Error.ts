type ErrorType = Record<string, string>;

export class AppError extends Error {
  private _errors: ErrorType;

  constructor(errors: ErrorType) {
    super(JSON.stringify(errors));
    this._errors = errors;
  }

  get errors() {
    return this._errors;
  }
}
