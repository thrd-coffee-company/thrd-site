import {
  Box,
  Heading,
  Center,
  Stack,
  Text,
  UnorderedList,
  ListItem,
  useBreakpointValue,
} from "@chakra-ui/react";
import { SectionContainer } from "../sectionContainer";
import { DoubleText } from "../doubleText";
import NextImage from "next/image";
import ccPopUp from "../../assets/images/cc-popup.jpg";

const PopUp = () => {
  return (
    <Box
      id="pop-up"
      className="Pop-up"
      bg="brown"
      p={{ base: 8, sm: 20 }}
      height="auto"
    >
      <Heading color="pink.600">Services</Heading>
      <SectionContainer p={{ base: 2, lg: 8 }}>
        <Center mb={12}>
          <DoubleText
            textColor="purple.800"
            fontSize={{ base: "5rem", sm: "7rem", md: "8rem", lg: "10rem" }}
            textAlign={{ base: "center", lg: "left" }}
            offset={useBreakpointValue({ base: "5px", lg: "15px" })}
          >
            POP UP
          </DoubleText>
        </Center>
        <Stack
          direction={{ base: "column", lg: "row" }}
          spacing={8}
          color="purple.800"
          fontSize="2xl"
        >
          <Box width={{ base: "100%", lg: "50%" }}>
            <NextImage
              src={ccPopUp}
              placeholder="blur"
              alt="Coffee cup in front of bar"
            />
          </Box>
          <Text width={{ base: "100%", lg: "50%" }}>
            Think mini-coffee shop: client covers our traveling cost & labor
            cost. We sell our products to your residents, tenants, or the
            public. We operate the bar in a public space such as a lobby.
            <UnorderedList mt={8}>
              <ListItem>Retail Businesses</ListItem>
              <ListItem>Brand Activations/Marketing Events</ListItem>
              <ListItem>Condo Buildings (collective days)</ListItem>
            </UnorderedList>
          </Text>
        </Stack>
      </SectionContainer>
    </Box>
  );
};

export default PopUp;
