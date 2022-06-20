import { Container } from "@chakra-ui/react";

import { Hero } from "../components/hero";
import { Main } from "../components/main";

const Index = () => (
  <Container maxW="container.xl" py={{ base: "4", lg: "5" }} height="100vh">
    <Hero />
    <Main />
  </Container>
);

export default Index;
