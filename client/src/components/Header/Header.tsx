import { Box, Container, Flex, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "src/shared/constants/routes";

export const Header = () => {
  return (
    <Box borderBottom="1px solid" borderBottomColor="blue.600">
      <Container>
        <Flex
          as="header"
          my="5"
          justifyContent="space-between"
          alignItems="center"
        >
          <Link as={NavLink} to={ROUTES.main} variant="logo">
            TASKS
          </Link>
          <Flex gap="4">
            <Link as={NavLink} to={ROUTES.login} variant="nav">
              Вход
            </Link>
            <Link as={NavLink} to={ROUTES.signup} variant="nav">
              Регистрация
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
