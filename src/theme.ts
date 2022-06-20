import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const fonts = {
  body: "Hind Vadodara, sans-serif",
  heading: "Playfair Display, serif",
  mono: `'Menlo', monospace`,
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
    heroGradientStart: {
      default: "#7928CA",
      _dark: "#e3a7f9",
    },
    heroGradientEnd: {
      default: "#FF0080",
      _dark: "#fbec8f",
    },
  },
  bg: {
    yellow: "#fdc021",
    lightYellow: "#fec828",
    lightBlue: "#ecf7FF",
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
    black: "#16161D",
    eggplant: {
      50: "#f8edfb",
      100: "#e0cbe7",
      200: "#caa9d5",
      300: "#b486c4",
      400: "#a064b4",
      500: "#864a9a",
      600: "#693978",
      700: "#4b2956",
      800: "#331b3b",
      900: "#110714",
    },
    banana: "#fdc221",
  },
  fonts,
  breakpoints,
});

export default theme;
