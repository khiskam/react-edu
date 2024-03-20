import { Categories } from "src/shared/constants";
import { Product } from "src/shared/types";

import { NONE, SORT } from "../contstants";

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
    fn: (value: Product, query: string) => {
      return value.title.toLowerCase().includes(query);
    },
  },
  _type: {
    fn: (value: Product, query: string) => {
      if (
        (query === Categories.Constructor &&
          value.category !== Categories.Constructor) ||
        (query === Categories.ForBoys &&
          value.category !== Categories.ForBoys) ||
        (query === Categories.ForGirls &&
          value.category !== Categories.ForGirls)
      ) {
        return false;
      } else {
        return true;
      }
    },
  },
} as const;

type ProductKeys = keyof Product;

export const SORT_MAP: Record<string, ProductKeys> = {
  _price: "price",
  _title: "title",
  _balance: "count",
} as const;

type OrderType = (typeof SORT)[keyof typeof SORT];

type SortType = {
  key: ProductKeys;
  order: OrderType;
};

export const sortAccelerator = (a: Product, b: Product, pair: SortType) => {
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

type FilterType = {
  key: FilterKeys;
  query: string;
};

export const sort = (pairs: SortType[]) => (a: Product, b: Product) => {
  return pairs.reduce((prev, curr) => prev || sortAccelerator(a, b, curr), 0);
};

export const filter = (keys: FilterType[]) => (a: Product) => {
  return keys.every((item) => FILTER_MAP[item.key].fn(a, item.query));
};

const isFilterKey = (key: string): key is FilterKeys => {
  return key in FILTER_MAP;
};

const isOrder = (key: string): key is OrderType => {
  return key in SORT;
};

export const filterSort = (searchParams: URLSearchParams, data: Product[]) => {
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
