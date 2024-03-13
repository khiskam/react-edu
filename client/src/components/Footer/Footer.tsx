import { Box, Container, Flex, Link, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "src/shared/constants/routes";

export const Footer = () => {
  return (
    <Box borderTop="1px solid" borderTopColor="blue.500" py="4">
      <Container>
        <Flex as="footer" alignItems="center" justifyContent="space-between">
          <Link as={NavLink} to={ROUTES.main} fontSize="xl" fontWeight="medium">
            TASKS
          </Link>
          <Text color="blue.500">&copy; Tasks</Text>
        </Flex>
      </Container>
    </Box>
  );
};
