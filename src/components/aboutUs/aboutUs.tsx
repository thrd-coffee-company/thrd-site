import { Box, Stack, VStack, Text, Heading } from "@chakra-ui/react";
import NextImage from "next/image";

import raoulAndCard from "../../assets/images/cc-raoul.png";
import employeePouringDrink from "../../assets/images/cc-coffee-pour.png";
import { SectionContainer } from "../sectionContainer";

const AboutUs = () => {
  return (
    <Box className="About-us" p={20} bg="pink.600" height="auto">
      <Heading color="brand">About us</Heading>
      <SectionContainer p={8}>
        <Stack spacing={10} direction="row" mb={28}>
          <Box>
            <NextImage src={raoulAndCard} alt="Raoul serving coffee" />
          </Box>
          <VStack spacing={6} color="white" fontSize="xl" width="50%">
            <Text>
              thrd. coffee company was born of the pandemic. In early 2020,
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
        <Stack spacing={10} direction="row">
          <VStack spacing={6} color="white" fontSize="xl" width="50%">
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
          <Box>
            <NextImage
              src={employeePouringDrink}
              alt="Employee pouring drink"
            />
          </Box>
        </Stack>
      </SectionContainer>
    </Box>
  );
};

export default AboutUs;
