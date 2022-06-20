import { chakra } from "@chakra-ui/react";
import NextImage from "next/image";

const ChakraNextImage = chakra(NextImage, {
  baseStyle: { maxH: 120, maxW: 120, overflow: "visible" },
  shouldForwardProp: (prop) =>
    ["width", "height", "src", "alt", "layout, style"].includes(prop),
});

export default ChakraNextImage;
