import {
  Box,
  Heading,
  Center,
  Stack,
  Text,
  VStack,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { SectionContainer } from "../sectionContainer";
import { DoubleText } from "../doubleText";
import NextImage from "next/image";
import ccDrinkInFront from "../../assets/images/cc-drink-infront.jpg";
import ccLine from "../../assets/images/cc-line.jpg";

const Services = () => {
  return (
    <Box className="Services" bg="purple.700" p={20}>
      <Heading color="pink.600">Services</Heading>
      <SectionContainer p={8}>
        <Center flexWrap="wrap" mb={12}>
          <DoubleText textColor="purple.600">OPEN BAR</DoubleText>
        </Center>
        <Stack direction="row" spacing={20}>
          <Box width="50%">
            <NextImage src={ccDrinkInFront} alt="Coffee cup in front of bar" />
          </Box>
          <VStack
            width="50%"
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
            <Box>
              <NextImage src={ccLine} alt="People in line" />
            </Box>
          </VStack>
        </Stack>
      </SectionContainer>
    </Box>
  );
};

export default Services;
