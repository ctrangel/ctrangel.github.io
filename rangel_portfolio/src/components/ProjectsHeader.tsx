import { Box, keyframes } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import shakeAnimation from "./ShakeAnimation";



const ProjectsHeader = () => {

  return (
    <Box
      display={"flex"}
      flexDir={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Image h={100} w={180} mt={115} src="/media/aot_chibi.png"></Image>
      <Box
        borderRadius="md"
        bg="#FFB612"
        color="white"
        px={4}
        h={7}
        p={10}
        transition={"all .2s ease-in-out"}
        _hover={{
          bg: "cyan",
          color: "black",
          animation: `${shakeAnimation} infinite .8s`,
        }}
        fontSize={"40px"}
        display={"flex"}
        alignContent={"center"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        Projects
      </Box>
    </Box>
  );
};

export default ProjectsHeader;