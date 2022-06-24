import { Box, Heading, Stack, Link } from "@chakra-ui/react";
import { SectionContainer } from "../sectionContainer";
import NextImage from "next/image";

import foxNews from "../../assets/images/fox-news.png";
import chicagoStar from "../../assets/images/chicago-star.png";
import BCCLogo from "../../assets/images/block-club-chicago.png";
import wgn from "../../assets/images/wgn.png";

const links = [
  {
    href: "https://www.fox32chicago.com/news/chicago-man-brews-up-succesful-coffee-business-amid-pandemic",
    src: foxNews,
    alt: "Fox News",
  },
  {
    href: "https://blockclubchicago.org/2020/08/28/this-humboldt-park-mans-traveling-coffee-bar-is-coming-to-a-small-event-near-you/",
    src: BCCLogo,
    alt: "Block Club Chicago",
  },
  {
    href: "https://issuu.com/chicagostar/docs/chicago_star_vol1_no1_march_2021",
    src: chicagoStar,
    alt: "Chicago Star",
  },
  {
    href: "https://wgntv.com/morning-news/around-town/around-town-quizzes-people-on-the-street-about-chicago-landmarks/",
    src: wgn,
    alt: "WGN",
  },
];

const Press = () => {
  return (
    <Box
      id="press"
      className="press"
      bg="brown"
      p={{ base: 8, sm: 20 }}
      height="auto"
    >
      <Heading color="pink.600">Press</Heading>
      <SectionContainer p={8}>
        <Stack
          spacing={8}
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="center"
        >
          {links.map((link) => (
            <Link key={link.alt} href={link.href} isExternal>
              <NextImage src={link.src} alt={link.alt} placeholder="blur" />
            </Link>
          ))}
        </Stack>
      </SectionContainer>
    </Box>
  );
};

export default Press;
