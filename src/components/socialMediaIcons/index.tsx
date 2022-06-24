import { ButtonGroup, IconButton, Link } from "@chakra-ui/react";
import {
  FiInstagram,
  FiShoppingCart,
  FiFacebook,
  FiLinkedin,
} from "react-icons/fi";
import { RiSpotifyLine } from "react-icons/ri";
import { FaTiktok } from "react-icons/fa";

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
      <Link href="https://www.facebook.com/thrdcoffeeco/" isExternal>
        <IconButton
          aria-label="Facebook"
          icon={<FiFacebook />}
          variant="ghost"
          _hover={{
            backgroundColor: "purple.700",
          }}
        />
      </Link>
      <Link href="http://www.tiktok.com/@thrdcoffeeco" isExternal>
        <IconButton
          aria-label="Tik Tok"
          icon={<FaTiktok />}
          variant="ghost"
          _hover={{
            backgroundColor: "purple.700",
          }}
        />
      </Link>
      <Link
        href="https://www.linkedin.com/company/thrd-coffee-company-llc"
        isExternal
      >
        <IconButton
          aria-label="LinkedIn"
          icon={<FiLinkedin />}
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
    </ButtonGroup>
  );
};

export { SocialIconsButtonGroup };
