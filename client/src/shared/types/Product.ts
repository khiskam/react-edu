import { Categories } from "../constants";

export type Product = {
  id: number;
  title: string;
  price: number;
  descr: string;
  count: number;
  cart: { count: number } | false;
  category: `${Categories}`;
  isOrdered: boolean;
};
