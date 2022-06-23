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
import thrdDrawnCup from "../../assets/images/thrd-cup-drawn.png";
import ccAmenty from "../../assets/images/cc-amenty.jpg";
import ccThrdSign from "../../assets/images/cc-thrd-sign.jpg";

const PINK_600_RGB = "rgb(231,160,235)";

const Amenty = () => {
  return (
    <Box
      id="amenty"
      className="Amenty"
      bg="purple.600"
      p={{ base: 8, sm: 20 }}
      height="auto"
    >
      <Heading color="pink.600">Services</Heading>
      <SectionContainer p={8}>
        <Center mb={12}>
          <DoubleText
            textColor="white"
            shadowColor={PINK_600_RGB}
            fontSize={{ base: "5rem", sm: "7rem", md: "8rem", lg: "10rem" }}
            textAlign={{ base: "center", lg: "left" }}
            offset={useBreakpointValue({
              base: "10px",
              lg: "15px",
            })}
          >
            AMEN.TY
          </DoubleText>
        </Center>
        <Stack direction="column" spacing={20}>
          <Stack
            direction={{ base: "column", lg: "row" }}
            spacing={{ base: 10, lg: 20 }}
            align="center"
            justify={{ lg: "space-around" }}
          >
            <Box width={{ base: "50%", lg: "30%" }}>
              <NextImage
                src={thrdDrawnCup}
                placeholder="blur"
                alt="Coffee cup with Third logo"
              />
            </Box>
            <Text
              color="pink.600"
              fontSize="2xl"
              width={{ base: "100%", lg: "40%" }}
            >
              A service in which drinks are unlimited for a specific amount of
              time. The host chooses from 3 different packages package that is
              best suited for their needs and desired expereince
              <UnorderedList mt={8}>
                <ListItem>Residential/Condo Buildings</ListItem>
                <ListItem>Corporate Offices</ListItem>
                <ListItem>Parties/Events/Weddings</ListItem>
              </UnorderedList>
            </Text>
          </Stack>
          <Stack direction={{ base: "column", lg: "row" }}>
            <Box width={{ base: "100%", lg: "50%" }}>
              <NextImage
                src={ccAmenty}
                placeholder="blur"
                alt="Coffee served at a bar"
              />
            </Box>
            <Box width={{ base: "100%", lg: "50%" }}>
              <NextImage
                src={ccThrdSign}
                placeholder="blur"
                alt="Third Coffee Company sign"
              />
            </Box>
          </Stack>
        </Stack>
      </SectionContainer>
    </Box>
  );
};

export default Amenty;
