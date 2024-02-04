import { Box, Container, Flex, Stack } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Link as ChakraLink } from "@chakra-ui/react";
import PhotoSection from "./PhotoSection";

const About = () => {
  return (
    <Box>
      <Stack p={10} m={2}>
        <Box
          mt="15vh"
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            borderRadius="md"
            bg="#FFB612"
            color="white"
            px={4}
            h={7}
            m={5}
            p={5}
            fontSize="30px"
            display="flex"
            alignContent="center"
            justifyContent="center"
            alignItems="center"
          >
            About
          </Box>
          <Text color={"white"} fontSize={"40px"}>
            Me
          </Text>
        </Box>
        <Flex display={"flex"} flexDir={{ base: "column", md: "row" }}>
          <Container>
            <Text
              color={"white"}
              fontSize={"15px"}
              textAlign={"left"}
              w="100%"
              p={{ base: 0, md: 5 }}
            >
              Hello! I'm Christian and I'm a second year Computer Science
              student major at Point Park University with an interest in web
              development and Design. With my creative ideas and skill set, I
              enjoy creating applications that are visually appealing and
              engaging. I am also very interested in transportation planning and
              the built environment.
              <br></br>
              <br></br>
              I'm currently learning React, TypeScript, Node.JS and Chakra UI
              while working on my portfolio. In course work I have been building
              API's with Express.js and also working on Server configuration
              with freeBSD. I'm also learning QGIS and data analytics to further
              my GIS and quantitative analysis skills.
              <br></br>
              <br></br>I currently work part time as a web developer for Humane
              Action Pittsburgh. I am also working on different personal
              projects as well as consistently updating my portfolio. Feel free
              to check out my Resume below and my photography section. If you
              have any inquiries feel free to contact me. Thanks for visiting!
            </Text>
            <ChakraLink href="/Christian_Rangel_Resume.pdf">
              <Text
                fontSize={"15px"}
                textAlign={"left"}
                w="100%"
                padding="50px"
                textDecoration="underline"
                color="cyan"
              >
                View my Resume
              </Text>
            </ChakraLink>
          </Container>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
          >
            <Image
              boxShadow={"cyan 3vw 3vw"}
              w={{ base: "270px", sm: "315px" }}
              h={{ base: "270px", sm: "315px" }}
              m={{ base: 0, md: 5 }}
              src="/DSC_0021-removebg-preview.png"
            ></Image>
          </Box>
        </Flex>
      </Stack>
      <PhotoSection />
    </Box>
  );
};

export default About;
