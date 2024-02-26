import { CardProps } from "./types";
import { cardStyles } from "./styles";
import { LinkButton } from "src/ui";
import { Modal } from "../Modal";

export const ProductCard = ({
  product,
  openId,
  onClose,
  onOpen,
  onPage,
}: CardProps) => {
  return (
    <>
      <div key={product.id} className={cardStyles}>
        <p>
          {product.title} ({product.price} ₽)
        </p>
        <span>Категория: {product.category}</span>
        <p> {product.description}</p>

        {product.count === 0 ? (
          <>
            <LinkButton onClick={() => onOpen?.(product.id)}>
              Заказать
            </LinkButton>
            {openId === product.id ? (
              <Modal onClose={() => onClose?.()} />
            ) : null}
          </>
        ) : (
          <LinkButton onClick={() => onPage?.(product.id)}>
            Подробнее
          </LinkButton>
        )}
      </div>
    </>
  );
};
