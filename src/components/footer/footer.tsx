import { Box, Stack, Text, Link } from '@chakra-ui/react';
import { SocialIconsButtonGroup } from '../socialMediaIcons';

const Footer = () => {
  return (
    <Box p={10} bg="purple.600">
      <Stack
        spacing={4}
        direction={{ base: 'column' }}
        align="center"
        color="white"
      >
        <SocialIconsButtonGroup />
        <Text as="span" textAlign="center">
          © {new Date().getFullYear()} Copyright: THRD COFFEE COMPANY, LLC
        </Text>
        <Text textAlign='center'>
          <Link href="https://maps.google.com/?q=1816%20N%20Milwaukee%20Ave,%20Chicago,%20IL%2060647" isExternal>
            1816 N Milwaukee Ave,
            Chicago, IL 60647
          </Link>
        </Text>
      </Stack>
    </Box>
  );
};

export default Footer;
