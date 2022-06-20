import {
  HStack,
  Box,
  Container,
  Button,
  ButtonGroup,
  useBreakpointValue,
  useDisclosure,
  Collapse,
  Stack,
  Flex,
  Link,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { MobileNav } from "../mobileNav";
import { SocialIconsButtonGroup } from "../socialMediaIcons";

const NAV_ITEMS = [
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Coffee",
    href: "/coffee",
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
];

const Navbar = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { asPath } = useRouter();

  return (
    <Box as="section" pb={{ base: "12" }}>
      <Box as="nav" bg="bg-surface">
        <Container maxW="container.xl" py={{ base: "4", lg: "5" }}>
          <HStack spacing="10" justify="space-between">
            {isDesktop ? (
              <>
                <ButtonGroup variant="link" spacing="8">
                  {NAV_ITEMS.map((item) => {
                    const ariaCurent =
                      asPath === item.href ? "page" : undefined;

                    return (
                      <Button key={item.label}>
                        <NextLink href={item.href} passHref>
                          <Link
                            fontWeight="normal"
                            aria-current={ariaCurent}
                            _activeLink={{
                              fontWeight: "semibold",
                            }}
                            _after={{
                              content: "''",
                              display: `${ariaCurent ? "block" : "none"}`,
                              width: "40%",
                              height: "15%",
                              position: "absolute",
                              bottom: -1,
                              left: -2,
                              bg: "banana",
                              zIndex: -1,
                            }}
                          >
                            {item.label}
                          </Link>
                        </NextLink>
                      </Button>
                    );
                  })}
                </ButtonGroup>
                <SocialIconsButtonGroup />
              </>
            ) : (
              <MobileNav isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
            )}
          </HStack>
          <Collapse in={isOpen} animateOpacity>
            <Stack py={4}>
              {NAV_ITEMS.map((item) => {
                const ariaCurent = asPath === item.href ? "page" : undefined;
                return (
                  <NextLink key={item.label} href={item.href} passHref>
                    <Link
                      aria-current={ariaCurent}
                      onClick={onClose}
                      _activeLink={{
                        color: "purple",
                      }}
                    >
                      {item.label}
                    </Link>
                  </NextLink>
                );
              })}
              <SocialIconsButtonGroup />
            </Stack>
          </Collapse>
        </Container>
      </Box>
    </Box>
  );
};

export default Navbar;
