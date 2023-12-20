import { Text } from "@chakra-ui/react";
import { Button } from "react-scroll";

export const Intro = () => {
  return (
    <div>
      <div>
        <div
          style={{
            backgroundColor: "#e8b16d",
            borderRadius: "10px",
            width: "fit-content",
            height: "fit-content",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px",
            marginLeft: "10px",
          }}
        >
          <Text
            bg={["black"]}
            bgClip="text"
            fontSize="20px"
            fontWeight="extrabold"
            textAlign={["center", "center"]}
            style={{
              transition: "all 0.5s ease-in-out",
            }}
            _hover={{
              color: "white",
              fontSize: "30px",
              fontWeight: "extrabold",
            }}
          >
            Hello!
          </Text>
        </div>

        <Text
          bgGradient="linear(to-l, white, cyan)"
          bgClip="text"
          fontSize="40px"
          fontWeight="extrabold"
          textAlign={["center", "center"]}
          style={{ transition: "all 0.5s ease-in-out" }}
          _hover={{
            color: "white",
            fontSize: "50px",
            fontWeight: "extrabold",
          }}
        >
          I'm Christian,
        </Text>
        <Text
          color={"black"}
          bgGradient="linear(to-l, cyan, cyan)"
          bgClip="text"
          fontSize="30px"
          fontWeight="extrabold"
          textAlign={["center", "center"]}
          marginBottom={["30px"]}
          style={{ transition: "all 0.5s ease-in-out" }}
          _hover={{
            color: "white",
            fontSize: "35px",
            fontWeight: "extrabold",
          }}
        >
          A student in software development
        </Text>
      </div>
    </div>
  );
};

export default Intro;
