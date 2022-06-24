import { Container } from "@chakra-ui/react";

const SectionContainer = ({ children, ...props }) => (
  <Container maxW="container.xl" {...props}>
    {children}
  </Container>
);

export default SectionContainer;
