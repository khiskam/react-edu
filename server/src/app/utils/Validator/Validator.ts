import { z } from "zod";

export class Validator {
  static getErrors = (errors: z.ZodIssue[]) => {
    return errors.reduce(
      (prev, curr) => Object.assign(prev, { [curr.path[0]]: curr.message }),
      {}
    );
  };
}
