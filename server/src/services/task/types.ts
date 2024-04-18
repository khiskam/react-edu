import { SORTING } from "./constants";

export type Sorting = (typeof SORTING)[number];
export type Order = "asc" | "desc";
export type SortingParams = Partial<Record<Sorting, Order>>;
