import {
  Box,
  Heading,
  Center,
  Stack,
  Text,
  VStack,
  UnorderedList,
  ListItem,
  useBreakpointValue,
} from "@chakra-ui/react";
import { SectionContainer } from "../sectionContainer";
import { DoubleText } from "../doubleText";
import NextImage from "next/image";
import ccDrinkInFront from "../../assets/images/cc-drink-infront.jpg";
import ccLine from "../../assets/images/cc-line.jpg";

const OpenBar = () => {
  return (
    <Box
      id="open-bar"
      className="Services"
      bg="purple.700"
      p={{ base: 8, sm: 20 }}
    >
      <Heading color="pink.600" textAlign={{ base: "center", sm: "left" }}>
        Services
      </Heading>
      <SectionContainer p={{ base: 2, lg: 8 }}>
        <Center mb={12}>
          <DoubleText
            textColor="purple.600"
            fontSize={{ base: "5rem", sm: "7rem", md: "8rem", lg: "10rem" }}
            textAlign={{ base: "center", lg: "left" }}
            offset={useBreakpointValue({ base: "5px", lg: "15px" })}
          >
            OPEN BAR
          </DoubleText>
        </Center>
        <Stack direction={{ base: "column", lg: "row" }} spacing={20}>
          <Box width={{ base: "100%", lg: "50%" }}>
            <NextImage
              src={ccDrinkInFront}
              alt="Coffee cup in front of bar"
              placeholder="blur"
            />
          </Box>
          <VStack
            width={{ base: "100%", lg: "50%" }}
            justify="space-around"
            color="pink.600"
            fontSize="2xl"
          >
            <Text>
              A service in which drinks are unlimited for a specific amount of
              time. The host chooses from 3 different packages package that is
              best suited for their needs and desired expereince
              <UnorderedList mt={8}>
                <ListItem>Residential/Condo Buildings</ListItem>
                <ListItem>Corporate Offices</ListItem>
                <ListItem>Parties/Events/Weddings</ListItem>
              </UnorderedList>
            </Text>
          </VStack>
          <Box>
            <NextImage src={ccLine} alt="People in line" placeholder="blur" />
          </Box>
        </Stack>
      </SectionContainer>
    </Box>
  );
};

export default OpenBar;
