import { Box, Stack, Text } from "@chakra-ui/react";
import { SocialIconsButtonGroup } from "../socialMediaIcons";

const Footer = () => {
  return (
    <Box p={10} bg="purple.600">
      <Stack
        spacing={4}
        direction={{ base: "column" }}
        align="center"
        color="white"
      >
        <SocialIconsButtonGroup />
        <Text as="span" textAlign="center">
          © {new Date().getFullYear()} Copyright: THRD COFFEE COMPANY, LLC
        </Text>
      </Stack>
    </Box>
  );
};

export default Footer;
