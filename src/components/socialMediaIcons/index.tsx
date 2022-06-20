import { ButtonGroup, IconButton } from "@chakra-ui/react";
import { FiInstagram, FiFacebook, FiMail } from "react-icons/fi";

const SocialIconsButtonGroup = () => {
  return (
    <ButtonGroup spacing={4}>
      <IconButton
        aria-label="Instagram"
        icon={<FiInstagram />}
        variant="ghost"
      />
      <IconButton aria-label="Facebook" icon={<FiFacebook />} variant="ghost" />
      <IconButton aria-label="Email" icon={<FiMail />} variant="ghost" />
    </ButtonGroup>
  );
};

export { SocialIconsButtonGroup };
