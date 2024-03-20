import { Product } from "src/shared/types";

export type ProductCardProps = {
  data: Product;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};
