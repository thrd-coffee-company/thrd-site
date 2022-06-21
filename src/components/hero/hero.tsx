import { Box, Stack } from "@chakra-ui/react";
import { MotionDiv } from "../motionDiv";
import NextImage from "next/image";

import thrdCart from "../../assets/images/thrd-cart.png";
import thrdLogo from "../../assets/images/thrd-logo.png";

const Hero = () => {
  return (
    <Box className="Hero" bg="purple.500" p={8}>
      <Stack
        direction="column"
        spacing={4}
        align="center"
        justify="center"
        position="relative"
      >
        <MotionDiv
          width="250px"
          // @ts-ignore
          transition={{ duration: 5 }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
          }}
        >
          <NextImage src={thrdLogo} alt="Third logo" />
        </MotionDiv>
        <Box width="80%">
          <NextImage src={thrdCart} />
        </Box>
      </Stack>
    </Box>
  );
};

export default Hero;
