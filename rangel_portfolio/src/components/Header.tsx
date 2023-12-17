import { Text } from "@chakra-ui/react";
export const Header = () => {
  return (
    <div>
      <Text
        bgGradient="linear(to-l, white, cyan)"
        bgClip="text"
        fontSize="40px"
        fontWeight="extrabold"
        textAlign={["center", "center"]}
      >
        Hi, I'm Christian
      </Text>
      <Text
        color={"black"}
        bgGradient="linear(to-l, cyan, cyan)"
        bgClip="text"
        fontSize="30px"
        fontWeight="extrabold"
        textAlign={["center", "center"]}
      
        marginBottom={["30px"]}

      >
        A student in software development
      </Text>
    </div>
  );
};

export default Header;
