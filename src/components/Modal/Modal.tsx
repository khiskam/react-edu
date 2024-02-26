import { Button } from "src/ui";
import { ModalProps } from "./types";
import { modalContainerStyles, modalInnerStyles } from "./styles";

export const Modal = ({ onClose }: ModalProps) => {
  return (
    <div className={modalContainerStyles}>
      <div className={modalInnerStyles}>
        <Button onClick={onClose}>Заказать</Button>
        <Button outlined onClick={onClose}>
          Закрыть
        </Button>
      </div>
    </div>
  );
};
