import { cardStyles } from "./styles";
import { UserCardProps } from "./types";

export const UserCard = ({ user }: UserCardProps) => {
  return (
    <>
      <div key={user.id} className={cardStyles}>
        <p>
          {user.name} ({user.username} ₽)
        </p>
        <span>Номер телефона: {user.phone}</span>
      </div>
    </>
  );
};
