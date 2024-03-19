import { data, Task } from "../../data";
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
    fn: (query: string, value: Task) => {
      return value.title.toLowerCase().includes(query);
    },
  },
  _type: {
    fn: (query: string, value: Task) => {
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

type TaskKeys = keyof Task;

export const sortAccelerator = (
  a: Task,
  b: Task,
  key: TaskKeys,
  order: Sort.Asc | Sort.Desc
) => {
  let c = 0;
  if (a[key] > b[key]) {
    c = 1;
  } else if (a[key] < b[key]) {
    c = -1;
  }

  return c * (order === Sort.Asc ? 1 : -1);
};

export const sort = (a: Task, b: Task, keys: TaskKeys[]) => {
  return keys.reduce(
    (prev, curr) => prev || sortAccelerator(a, b, curr, Sort.Asc),
    0
  );
};

// export const filter = ()

console.log(data.sort((a, b) => sort(a, b, ["title", "createdAt"])));
