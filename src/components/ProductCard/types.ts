export type CardProps = {
  product: Product;
  to?: string;
};

type Product = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
};
