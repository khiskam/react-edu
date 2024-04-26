import { Task } from "src/shared/types";

import { NONE, SORT, TabFilter } from "../contstants";

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

export const SORT_MAP: Record<string, TaskKeys> = {
  _title: "title",
  _date: "createdAt",
} as const;

export const sortAccelerator = (a: Task, b: Task, pair: SortType) => {
  const { key, order } = pair;
  let value = 0;

  if (a[key] > b[key]) {
    value = 1;
  } else if (a[key] < b[key]) {
    value = -1;
  }

  return value * (order === SORT.asc ? 1 : -1);
};

type FilterKeys = keyof typeof FILTER_MAP;
type OrderType = (typeof SORT)[keyof typeof SORT];

type FilterType = {
  key: FilterKeys;
  query: string;
};

type TaskKeys = keyof Task;

type SortType = {
  key: TaskKeys;
  order: OrderType;
};

export const sort = (pairs: SortType[]) => (a: Task, b: Task) => {
  return pairs.reduce((prev, curr) => prev || sortAccelerator(a, b, curr), 0);
};

export const filter = (keys: FilterType[]) => (a: Task) => {
  return keys.every((item) => FILTER_MAP[item.key].fn(a, item.query));
};

const isFilterKey = (key: string): key is FilterKeys => {
  return key in FILTER_MAP;
};

const isOrder = (key: string): key is OrderType => {
  return key in SORT;
};

export const filterSort = (searchParams: URLSearchParams, data: Task[]) => {
  const filterArr: FilterType[] = [];
  const sortArr: SortType[] = [];

  searchParams.forEach((value, key) => {
    console.log(value, key);
    if (isFilterKey(key)) {
      filterArr.push({ key, query: value });
    } else if (key in SORT_MAP && isOrder(value)) {
      const item = SORT_MAP[key];
      sortArr.push({ key: item, order: value });
    }
  });

  let temp = data;

  if (filterArr.length > 0) {
    const filterrFn = filter(filterArr);
    temp = temp.filter(filterrFn);
  }

  if (sortArr.length > 0) {
    const sortFn = sort(sortArr);
    temp = temp.sort(sortFn);
  }

  return temp;
};
