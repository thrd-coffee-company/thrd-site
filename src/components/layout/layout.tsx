import { Box } from "@chakra-ui/react";
import { Navbar } from "../navbar";

const Layout = ({ children }) => {
  return (
    <Box width="100vw" height="100vh">
      <Navbar />
      {children}
    </Box>
  );
};

export default Layout;
