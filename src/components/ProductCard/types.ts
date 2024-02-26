export type CardProps = {
  product: Product;
  openId?: number;
  onClose?: () => void;
  onOpen?: (id: number) => void;
  onPage?: (id: number) => void;
};

export type Product = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  count: number;
};
