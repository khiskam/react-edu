import { ThemeOverride, extendTheme } from "@chakra-ui/react";

const base: ThemeOverride = {
  components: {
    Container: {
      baseStyle: {
        maxW: ["100%", "540px", "768px", "992px", "1200px", "1400px"],
      },
    },
    Link: {
      baseStyle: {
        color: "blue.500",
        _hover: {
          textDecoration: "none",
        },
      },
    },
  },
};

export const theme = extendTheme(base);
