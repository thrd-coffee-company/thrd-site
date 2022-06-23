import { Box, Stack } from "@chakra-ui/react";
import { MotionDiv } from "../motionDiv";
import NextImage from "next/image";

import thrdCart from "../../assets/images/thrd-cart.png";
import thrdLogo from "../../assets/images/thrd-logo.png";

const Hero = () => {
  return (
    <Box id="Hero" className="Hero" bg="purple.500" p={12}>
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
            className="Hero__logo"
            sx={{
              transform: {
                base: "translateX(-50%) translateY(-100%) scale(.75)",
                sm: "translateX(-75%) scale(1)",
                md: "translateX(-100%) scale(1.5)",
                lg: "translateX(-200%) scale(1.5)",
              },
            }}
          >
            <NextImage src={thrdLogo} alt="Third logo" placeholder="blur" />
          </Box>
        </MotionDiv>
        <Box width={{ base: "80%", sm: "70%", md: "60%", lg: "50%" }}>
          <NextImage src={thrdCart} placeholder="blur" />
        </Box>
      </Stack>
    </Box>
  );
};

export default Hero;
