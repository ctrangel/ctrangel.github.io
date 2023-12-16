import { Text } from "@chakra-ui/react";
export const Header = () => {
  return (
    <div>
      <Text
        bgGradient="linear(to-l, white, cyan)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
        textAlign={["center", "center"]}
      >
        Christian Rangel
      </Text>
    </div>
  );
};

export default Header;
