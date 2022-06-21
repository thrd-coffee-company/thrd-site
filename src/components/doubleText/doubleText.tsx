import { Text } from "@chakra-ui/react";

const DoubleText = ({ textColor, children, ...props }) => {
  return (
    <Text
      fontSize="10rem"
      fontWeight="bold"
      lineHeight="shorter"
      color={textColor}
      textShadow="0px 15px 0px white"
      {...props}
    >
      {children}
    </Text>
  );
};

export default DoubleText;
