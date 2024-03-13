import { Box, Container, Flex, Link, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "src/shared/constants/routes";

export const Footer = () => {
  return (
    <Box borderTop="1px solid" borderTopColor="blue.600">
      <Container>
        <Flex
          as="footer"
          my="5"
          justifyContent="space-between"
          alignItems="center"
        >
          <Link as={NavLink} to={ROUTES.main} variant="logo">
            TASKS
          </Link>
          <Text color="blue.600" fontWeight="medium">
            &copy; Tasks
          </Text>
        </Flex>
      </Container>
    </Box>
  );
};
