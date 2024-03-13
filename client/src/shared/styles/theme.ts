import { ThemeOverride, extendTheme } from "@chakra-ui/react";

const base: ThemeOverride = {
  fonts: {
    body: "'Montserrat', sans-serif",
    heading: "'Montserrat', sans-serif",
  },
  fontSizes: {
    0.5: "0.125rem",
    1: "0.25rem",
    1.5: "0.375rem",
    2: "0.5rem",
    2.5: "0.625rem",
    3: "0.75rem",
    3.5: "0.875rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
  },

  components: {
    Button: {
      baseStyle: {
        fontWeight: "medium",
      },
      variants: {
        solidBlue: {
          bg: "blue.600",
          color: "white",
        },
        // outlineBlue: {
        //   borderColor: "blue.600",
        //   border: "1px solid",
        //   color: "blue.600",
        // },
      },
    },
    Container: {
      baseStyle: {
        maxW: ["100%", "540px", "768px", "992px", "1200px", "1400px"],
      },
    },
    Link: {
      baseStyle: {
        transition: "400ms",
        _hover: {
          textDecoration: "none",
          textShadow: "4px 4px 4px rgba(43,108,176,0.32)",
        },
      },
      variants: {
        logo: {
          fontSize: [4, 5],
          color: "blue.600",
          fontWeight: "medium",
        },
        nav: {
          color: "blue.600",
          fontWeight: "medium",
        },
      },
    },
  },
};

export const theme = extendTheme(base);
