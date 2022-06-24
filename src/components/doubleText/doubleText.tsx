import { Text } from "@chakra-ui/react";

const DoubleText = ({
  // fontSize = "10rem",
  offset = "15px",
  textColor,
  shadowColor = "white",
  children,
  ...props
}) => {
  return (
    <Text
      // fontSize={fontSize}
      fontWeight="bold"
      letterSpacing="wide"
      color={textColor}
      textShadow={`0px ${offset} 0px ${shadowColor}`}
      {...props}
    >
      {children}
    </Text>
  );
};

export default DoubleText;
