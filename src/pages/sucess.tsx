import { Box, Heading, Center, Text } from "@chakra-ui/react";
import { SectionContainer } from "../components/sectionContainer";

const SuccessPage = () => {
  return (
    <Box className="success-page" bg="purple.500" p={20} height="100vh">
      <SectionContainer p={8}>
        <Center mb={8}>
          <Heading color="purple.800" textTransform="uppercase" fontSize="4xl">
            SUCCESS!
          </Heading>
        </Center>
        <Center>
          <Text color="white" fontSize="xl">
            Thank you for your interest in our services. We will be in touch
            with you shortly
          </Text>
        </Center>
      </SectionContainer>
    </Box>
  );
};

export default SuccessPage;
