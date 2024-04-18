import { SORTING } from "./constants";
import { Order, Sorting, SortingParams } from "./types";

export class StringConverting {
  static toInteger(def: number, str?: string): number {
    if (!str) return def;

    const num = Number(str);
    if (Number.isInteger(num)) {
      return num;
    }

    return def;
  }

  private static isSorting(str: string): str is Sorting {
    const found = SORTING.find((key) => key === str);
    return found ? true : false;
  }

  private static isOrder(str: string): str is Order {
    return str === "asc" || str === "desc";
  }

  static toSortingArr(str?: string): SortingParams {
    if (!str) return {};

    const tmp = str.split(";");
    const result: SortingParams = {};

    for (let i = 0; i < tmp.length; ++i) {
      const token = tmp[i].split(":");

      if (
        token.length === 2 &&
        this.isSorting(token[0]) &&
        this.isOrder(token[1])
      ) {
        result[token[0]] = token[1];
      }
    }

    return result;
  }

  static toBoolean(str?: string): boolean | undefined {
    return str == "0" || str == "1" ? !!+str : undefined;
  }
}
