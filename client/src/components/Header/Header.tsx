import { Box, Container, Flex, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "src/shared/constants/routes";

export const Header = () => {
  return (
    <Box borderBottom="1px solid" borderBottomColor="blue.500" py="4">
      <Container>
        <Flex as="header" alignItems="center" justifyContent="space-between">
          <Link as={NavLink} to={ROUTES.main} fontSize="xl" fontWeight="medium">
            TASKS
          </Link>
          <Flex gap="4">
            <Link as={NavLink} to={ROUTES.login}>
              Вход
            </Link>
            <Link as={NavLink} to={ROUTES.signup}>
              Регистрация
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
