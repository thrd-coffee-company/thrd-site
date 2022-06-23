import { Box, Stack, Center, Text } from "@chakra-ui/react";
import { SectionContainer } from "../sectionContainer";
import { DoubleText } from "../doubleText";
import { ContactForm } from "../contactForm";

const BookEvent = () => {
  return (
    <Box
      id="book-event"
      className="BookEvent"
      bg="pink.700"
      p={20}
      height="auto"
    >
      <SectionContainer p={8} maxW="container.md">
        <Stack direction="column" align="center" mb={10}>
          <Center>
            <DoubleText textColor="purple.600" fontSize="5rem" offset="0px">
              BOOK EVENT
            </DoubleText>
          </Center>
          <Text fontSize="xl" fontWeight="bold" color="white">
            We are now accepting bookings for events!
          </Text>
          <Text fontSize="xl" fontWeight="bold" color="white">
            Fill out the form below to find out more
          </Text>
        </Stack>
        <ContactForm />
      </SectionContainer>
    </Box>
  );
};

export default BookEvent;
