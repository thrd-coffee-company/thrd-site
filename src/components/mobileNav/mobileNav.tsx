import { IconButton } from "@chakra-ui/react";
import { FiMenu, FiX } from "react-icons/fi";
import { Logo } from "../logo";

const MobileNav = ({ isOpen, onOpen, onClose }) => {
  return (
    <>
      <Logo onClick={onClose} />
      <IconButton
        variant="ghost"
        aria-label="Open Menu"
        onClick={isOpen ? onClose : onOpen}
        icon={
          isOpen ? <FiX fontSize="1.25rem" /> : <FiMenu fontSize="1.25rem" />
        }
      />
    </>
  );
};

export default MobileNav;
