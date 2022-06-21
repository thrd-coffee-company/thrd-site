import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const fonts = {
  body: "Work Sans, sans-serif",
  heading: "Work Sans, monospace",
  mono: `Source Code Pro, monospace`,
};

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
  "2xl": "96em",
});

const textStyles = {
  logo: {
    fontSize: ["2xl", "3xl"],
    fontWeight: "bold",
    lineHeight: "shorter",
  },
};

const layerStyles = {
  logo: {
    bgGradient: "linear(to-l, heroGradientStart, heroGradientEnd)",
    bgClip: "text",
  },
};

const semanticTokens = {
  colors: {
    text: {
      default: "#16161D",
      _dark: "#ade3b8",
    },
  },
  radii: {
    button: "12px",
  },
};

const theme = extendTheme({
  textStyles,
  layerStyles,
  semanticTokens,
  colors: {
    brand: "#243dff",
    black: "#16161D",
    pink: {
      500: "#fae3eb",
      600: "#e7a0eb",
      700: "#f19ac4",
    },
    purple: {
      500: "#a5a0eb",
      600: "#5b5ed4",
      700: "#333c5c",
      800: "#612f9d",
    },
    brown: "#9f8b8a",
  },
  fonts,
  breakpoints,
});

export default theme;
