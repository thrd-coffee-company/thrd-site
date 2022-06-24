import { Box, Heading, Stack, Text, Link, Button } from "@chakra-ui/react";
import { SectionContainer } from "../components/sectionContainer";
import NextLink from "next/link";

const SuccessPage = () => {
  return (
    <Box className="success-page" bg="purple.500" p={20} height="100vh">
      <SectionContainer p={8}>
        <Stack direction="column" align="center" justify="center" spacing={8}>
          <Heading color="purple.800" textTransform="uppercase" fontSize="4xl">
            SUCCESS!
          </Heading>
          <Text color="white" fontSize="xl">
            Thank you for your interest in our services. We will be in touch
            with you shortly
          </Text>

          <NextLink href="/" passHref style={{ textDecoration: "none" }}>
            <Link _hover={{ textDecoration: "none" }}>
              <Button
                bg="purple.600"
                color="white"
                size="lg"
                _hover={{
                  bg: "purple.700",
                  textDecoration: "none",
                }}
              >
                Go home
              </Button>
            </Link>
          </NextLink>
        </Stack>
      </SectionContainer>
    </Box>
  );
};

export default SuccessPage;
