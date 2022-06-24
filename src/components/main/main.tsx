import { Box, BoxProps } from "@chakra-ui/react";

const Main = (props: BoxProps) => (
  <Box as="main" width="100%" {...props}>
    {props.children}
  </Box>
);

export default Main;
