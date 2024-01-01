import { Box, keyframes } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";



const ProjectsHeader = () => {

     const animation = keyframes`
  
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }
   30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }
  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
`;
     const shake = `${animation} infinite .5s`;

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
        _hover={{ bg: "cyan", color: "black", animation: shake }}
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