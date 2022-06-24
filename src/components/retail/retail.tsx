import {
  Box,
  Heading,
  Center,
  Stack,
  HStack,
  Link,
  Text,
  UnorderedList,
  ListItem,
  useBreakpointValue,
} from "@chakra-ui/react";
import { SectionContainer } from "../sectionContainer";
import { DoubleText } from "../doubleText";
import NextImage from "next/image";

import thrdBag from "../../assets/images/thrd-bag.jpg";
import thrdBagsDog from "../../assets/images/thrd-bags-dog.jpg";
import thrdBlueShirt from "../../assets/images/thrd-blue-shirt.jpg";
import thrdHat from "../../assets/images/thrd-hat.jpg";
import thrdCouple from "../../assets/images/thrd-couple.jpg";

const PURPLE_500_RGB = "rgb(165,160,235)";

const Retail = () => {
  return (
    <Box
      id="retail"
      className="Retail"
      bg="pink.700"
      p={{ base: 8, sm: 20 }}
      height="auto"
    >
      <Heading color="purple.600">Services</Heading>
      <SectionContainer p={8}>
        <Center mb={12}>
          <DoubleText
            textColor="purple.600"
            shadowColor={PURPLE_500_RGB}
            fontSize={{ base: "5rem", sm: "7rem", md: "8rem", lg: "10rem" }}
            textAlign={{ base: "center", lg: "left" }}
            offset={useBreakpointValue({
              base: "10px",
              lg: "15px",
            })}
          >
            RETAIL
          </DoubleText>
        </Center>
        <HStack spacing={8} justify="space-around">
          <Text color="purple.600" fontSize="2xl" mb={16}>
            As a mobile coffee company, we like to sell stuff.
            <UnorderedList mt={4}>
              <ListItem>Coffee</ListItem>
              <ListItem>Sweaters and t-shirts</ListItem>
              <ListItem>Tote bags</ListItem>
              <ListItem>Hats</ListItem>
              <ListItem>Other swag</ListItem>
            </UnorderedList>
          </Text>
        </HStack>
        <Stack
          direction={{ base: "column", lg: "row" }}
          spacing={8}
          justify="space-evenly"
          flexWrap="wrap"
        >
          <Box width={{ base: "100%", lg: "25%" }}>
            <NextImage src={thrdBag} alt="Tote bag" placeholder="blur" />
          </Box>
          <Box width={{ base: "100%", lg: "25%" }}>
            <NextImage src={thrdBagsDog} alt="Tote bag" placeholder="blur" />
          </Box>
          <Box width={{ base: "100%", lg: "25%" }}>
            <NextImage src={thrdBlueShirt} alt="Tote bag" placeholder="blur" />
          </Box>
          <Box width={{ base: "100%", lg: "25%" }}>
            <NextImage src={thrdHat} alt="Tote bag" placeholder="blur" />
          </Box>
          <Box width={{ base: "100%", md: "50%" }}>
            <NextImage src={thrdCouple} alt="Tote bag" placeholder="blur" />
          </Box>
        </Stack>
        <Center mt={10}>
          <Link
            href="https://cashdrop.biz/thrdcoffee"
            color="purple.600"
            fontWeight={500}
            fontSize="2xl"
            isExternal
          >
            <DoubleText
              textColor="purple.800"
              fontSize={{ base: "3rem", sm: "5rem" }}
              textAlign={{ base: "center", lg: "left" }}
              offset={useBreakpointValue({
                base: "5px",
                sm: "7px",
                md: "10px",
              })}
            >
              CLICK ME & SHOP
            </DoubleText>
          </Link>
        </Center>
      </SectionContainer>
    </Box>
  );
};

export default Retail;
