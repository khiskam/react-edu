import { Container, Grid, Link, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "src/shared/constants/routes";
import { useAuth } from "src/shared/store";

export const MainPage = () => {
  const { token } = useAuth(({ token }) => ({ token }));
  return (
    <Container>
      {token ? null : (
        <Grid h="100%" alignItems="center">
          <Text>
            Вы не авторизованы. Пожалуйста,{" "}
            <Link
              as={NavLink}
              to={ROUTES.login}
              variant="nav"
              colorScheme="blue.600"
            >
              войдите в аккаунт
            </Link>
            .
          </Text>
        </Grid>
      )}
    </Container>
  );
};
