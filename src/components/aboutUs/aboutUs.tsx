import { Box, Stack, VStack, Text, Heading } from "@chakra-ui/react";
import NextImage from "next/image";

import raoulAndCard from "../../assets/images/cc-raoul.png";
import employeePouringDrink from "../../assets/images/cc-coffee-pour.png";
import { SectionContainer } from "../sectionContainer";

const AboutUs = () => {
  return (
    <Box
      id="about-us"
      className="About-us"
      p={{ base: 8, sm: 20 }}
      bg="pink.600"
      height="auto"
    >
      <Heading
        color="brand"
        textAlign={{ base: "center", sm: "left" }}
        my={{ base: 4, sm: 0 }}
      >
        About us
      </Heading>
      <SectionContainer p={{ base: 2, lg: 8 }}>
        <Stack
          spacing={10}
          direction={{ base: "column", lg: "row" }}
          mb={{ base: 12, lg: 28 }}
        >
          <Box width={{ base: "100%", lg: "50%" }}>
            <NextImage src={raoulAndCard} alt="Raoul serving coffee" />
          </Box>
          <VStack
            spacing={6}
            color="white"
            fontSize="xl"
            width={{ base: "100%", lg: "50%" }}
          >
            <Text>
              thrd. coffee company was born out of the pandemic. In early 2020,
              Raoul did not foresee having a mobile coffee business; but, during
              the shutdown he invested his time creating a competitive business
              plan and designed the mobile bar and brand.
            </Text>
            <Text>
              thrd was inspired by many other businesses in LA, NYC, and
              Florida. In addition, all marketing themes were inspired by
              Chicago Native musicians such as Chance The Rapper, Common, and
              Vic Mensa.
            </Text>
          </VStack>
        </Stack>
        <Stack
          spacing={10}
          direction={{ base: "column", md: "column", lg: "row" }}
        >
          <VStack
            spacing={6}
            color="white"
            fontSize="xl"
            width={{ base: "100%", lg: "50%" }}
          >
            <Text>
              During a time in which coffee shops were closed down, thrd coffee
              knew that we could bring customers a coffee shop expierience
              without the brick and mortar.
            </Text>
            <Text>
              thrd has pivoted slightly to bring great coffee and a unique
              atmosphere to places where they typically wouldn&apos;t be found.
            </Text>
          </VStack>
          <Box width={{ base: "100%", md: "100%", lg: "50%" }}>
            <NextImage
              src={employeePouringDrink}
              placeholder="blur"
              alt="Employee pouring drink"
            />
          </Box>
        </Stack>
      </SectionContainer>
    </Box>
  );
};

export default AboutUs;
