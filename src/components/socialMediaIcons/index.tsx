import { ButtonGroup, IconButton, Link } from "@chakra-ui/react";
import { FiInstagram, FiShoppingCart } from "react-icons/fi";
import { RiSpotifyLine } from "react-icons/ri";

const SocialIconsButtonGroup = () => {
  return (
    <ButtonGroup spacing={4} color="white">
      <Link href="https://www.instagram.com/thrdcoffeeco/" isExternal>
        <IconButton
          aria-label="Instagram"
          icon={<FiInstagram />}
          variant="ghost"
          _hover={{
            backgroundColor: "purple.700",
          }}
        />
      </Link>
      <Link href="https://cashdrop.biz/thrdcoffee" isExternal>
        <IconButton
          aria-label="Store"
          icon={<FiShoppingCart />}
          variant="ghost"
          _hover={{
            backgroundColor: "purple.700",
          }}
        />
      </Link>
      <Link
        href="https://open.spotify.com/playlist/3YO08iy8IKWtmENDlflCJt?si=H_VwYQ5sSjqIS6QTN5A9DQ"
        isExternal
      >
        <IconButton
          aria-label="Spotify"
          icon={<RiSpotifyLine />}
          variant="ghost"
          _hover={{
            backgroundColor: "purple.700",
          }}
        />
      </Link>
    </ButtonGroup>
  );
};

export { SocialIconsButtonGroup };
