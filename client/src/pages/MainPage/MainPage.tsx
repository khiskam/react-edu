import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Collapse,
  Container,
  Grid,
  Link,
  Text,
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "src/shared/constants/routes";
import { useAuth } from "src/shared/store";

export const MainPage = () => {
  const { token } = useAuth(({ token }) => ({ token }));
  const [hello, setHello] = useState(false);
  return (
    <Container>
      <button onClick={() => setHello((hello) => !hello)}>click</button>
      <AnimatePresence>
        {hello && (
          <motion.div
            style={{ overflow: "hidden" }}
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            transition={{ duration: 0.5 }}
            exit={{ height: 0 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </motion.div>
        )}
      </AnimatePresence>
      {!token ? (
        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Section 2 title
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Section 2 title
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      ) : (
        <Grid h="100%" alignItems="center">
          <Text>
            Вы не авторизованы. Пожалуйста,
            <Link as={NavLink} to={ROUTES.login} variant="nav">
              войдите в аккаунт
            </Link>
            .
          </Text>
        </Grid>
      )}
    </Container>
  );
  //   const [hello, setHello] = useState(false);
  //   return (
  //     <div className="App">
  //       <h1>Hello CodeSandbox</h1>
  //       <h2>Start editing to see some magic happen!</h2>
  //       <div>
  //         <button onClick={() => setHello((hello) => !hello)}>click</button>
  //         <AnimatePresence>
  //           {hello && (
  //             <motion.div
  //               style={{ overflow: "hidden" }}
  //               initial={{ height: 0, opacity: 0 }}
  //               animate={{ height: "auto", opacity: 1 }}
  //               transition={{ duration: 0.5 }}
  //               exit={{ height: 0, opacity: 0 }}
  //             >
  //               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  //               eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
  //               enim ad minim veniam, quis nostrud exercitation ullamco laboris
  //               nisi ut aliquip ex ea commodo consequat.
  //             </motion.div>
  //           )}
  //         </AnimatePresence>
  //       </div>
  //     </div>
  //   );
};
