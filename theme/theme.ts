import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
});

const theme = extendTheme({
  breakpoints,
  styles: {
    global: {
      body: {
        backgroundColor: "#fff",
        color: "gray.800",
      },
    },
  },
});

export default theme;
