import {
  Box,
  Text,
  Stack,
  Flex,
  Heading,
  useBreakpointValue,
  Button,
} from "@chakra-ui/react";
import { ChakraNextImage } from "../chakraNextImage";
import NextImage from "next/image";
import heroImage from "../../assets/images/hero-group.png";

const Hero = () => {
  return (
    <Box p={8}>
      <Stack spacing={10} direction="row" justifyContent="space-between">
        <Box>Hello</Box>
        <Box>Hello</Box>
      </Stack>
    </Box>
  );
};

export default Hero;
