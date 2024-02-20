import { Link } from "src/ui";
import { CardProps } from "./types";
import { cardStyles } from "./styles";

export const ProductCard = ({ product, to }: CardProps) => {
  return (
    <>
      <div key={product.id} className={cardStyles}>
        <p>
          {product.title} ({product.price} ₽)
        </p>
        <span>Категория: {product.category}</span>
        <p> {product.description}</p>

        {to ? <Link to={to}>Подробнее</Link> : null}
      </div>
    </>
  );
};
