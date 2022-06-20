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
import thrdCart from "../../assets/svg/thrd-cart.png";

const Hero = () => {
  return (
    <Box p={8}>
      <Stack direction="column" spacing={4} align="center" justify="center">
        <Heading fontFamily="body" as="h2" size="3xl" fontWeight="semibold">
          hi
        </Heading>
        <Box width="100%">
          <NextImage src={thrdCart} />
        </Box>
      </Stack>
    </Box>
  );
};

export default Hero;
