import { Box } from "@chakra-ui/react";
import { Navbar } from "../navbar";

const Layout = ({ children }) => {
  return (
    <Box className="layout" width="100vw" height="100vh" overflow="auto">
      <Navbar />
      {children}
    </Box>
  );
};

export default Layout;
