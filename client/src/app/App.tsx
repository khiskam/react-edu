import { RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import "src/shared/styles/fonts.css";
import { theme } from "../shared/styles";
import { router } from "src/shared/routes";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
