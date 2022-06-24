import NextLink from "next/link";
import { Heading, Link } from "@chakra-ui/react";

const Logo = (props) => {
  return (
    <NextLink href="/" passHref style={{ textDecoration: "none" }}>
      <Link
        _hover={{
          textDecoration: "none",
        }}
        {...props}
      >
        <Heading as="h1" textStyle="logo" layerStyle="logo">
          Heaven Sent Doodles
        </Heading>
      </Link>
    </NextLink>
  );
};

export default Logo;
