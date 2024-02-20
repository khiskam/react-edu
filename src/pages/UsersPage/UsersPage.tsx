import axios from "axios";
import { useEffect, useState } from "react";
import { UserCard } from "src/components/UserCard/UserCard";
import { Container, Divider, Title } from "src/ui";
import { cardBoxStyles, usersInnerStyles } from "./styles";

type UserResponse = {
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
};

export const UsersPage = () => {
  const [users, setUsers] = useState<UserResponse[]>([]);

  const getUsers = async () => {
    try {
      const response = await axios.get<UserResponse[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <Divider />
      <Container className={usersInnerStyles}>
        <Title>Пользователи</Title>
        <div className={cardBoxStyles}>
          {users.map((user) => (
            <UserCard user={user} key={user.id} />
          ))}
        </div>
      </Container>
    </>
  );
};
