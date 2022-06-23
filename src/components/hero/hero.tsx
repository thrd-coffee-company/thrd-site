import { Box, Stack } from "@chakra-ui/react";
import { MotionDiv } from "../motionDiv";
import NextImage from "next/image";

import thrdCart from "../../assets/images/thrd-cart.png";
import thrdLogo from "../../assets/images/thrd-logo.png";

const Hero = () => {
  return (
    <Box id="Hero" className="Hero" bg="purple.500" p={8}>
      <Stack
        direction="column"
        spacing={4}
        align="center"
        justify="center"
        position="relative"
      >
        <MotionDiv
          width="200px"
          // @ts-ignore
          transition={{ duration: 5 }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
          }}
        >
          <Box
            sx={{
              transform: "translateX(-200%) scale(1.5)",
            }}
          >
            <NextImage src={thrdLogo} alt="Third logo" />
          </Box>
        </MotionDiv>
        <Box width="40%">
          <NextImage src={thrdCart} />
        </Box>
      </Stack>
    </Box>
  );
};

export default Hero;
