import { Box, Stack, Heading } from "@chakra-ui/react";
import NextImage from "next/image";
import thrdCart from "../../assets/svg/thrd-cart.png";

const Hero = () => {
  return (
    <Box p={8}>
      <Stack direction="column" spacing={4} align="center" justify="center">
        <Heading
          fontFamily="body"
          as="h2"
          size="3xl"
          fontWeight="semibold"
          color="brand"
        >
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
