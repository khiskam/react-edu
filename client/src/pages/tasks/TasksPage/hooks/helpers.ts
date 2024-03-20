import { Task } from "../../data";
import { NONE, Sort, TabFilter } from "../contstants";

export const changeParams = (
  searchParams: URLSearchParams,
  pair: [string, string]
) => {
  if (pair[1] === NONE) {
    searchParams.delete(pair[0]);
  } else {
    searchParams.set(pair[0], pair[1]);
  }

  return searchParams;
};

export const FILTER_MAP = {
  _search: {
    fn: (value: Task, query: string) => {
      return value.title.toLowerCase().includes(query);
    },
  },
  _type: {
    fn: (value: Task, query: string) => {
      if (
        (query === TabFilter.Completed && !value.isCompleted) ||
        (query === TabFilter.Incompleted && value.isCompleted)
      ) {
        return false;
      } else {
        return true;
      }
    },
  },
} as const;

type FilterKeys = keyof typeof FILTER_MAP;

type F = {
  key: FilterKeys;
  query: string;
};

type TaskKeys = keyof Task;

type SortType = {
  key: TaskKeys;
  order: Sort.Asc | Sort.Desc;
};

export const sortAccelerator = (a: Task, b: Task, pair: SortType) => {
  const { key, order } = pair;
  let value = 0;

  if (a[key] > b[key]) {
    value = 1;
  } else if (a[key] < b[key]) {
    value = -1;
  }

  return value * (order === Sort.Asc ? 1 : -1);
};

export const sort = (pairs: SortType[]) => (a: Task, b: Task) => {
  return pairs.reduce((prev, curr) => prev || sortAccelerator(a, b, curr), 0);
};

export const filter = (keys: F[]) => (a: Task) => {
  return keys.every((item) => FILTER_MAP[item.key].fn(a, item.query));
};
