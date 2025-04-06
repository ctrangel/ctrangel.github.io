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
          <a
            href="https://www.linkedin.com/in/christian-rangel-9406a0189/"
            target="_blank"
          >
            <Image
              src="/media/headshot2.jpg"
              alt="LinkedIn"
              width="200px"
              height="200px"
              borderRadius="full"
              objectFit="cover"
              ml={5}
            />
          </a>
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
              Hello! I'm Christian, a senior Computer Science student at Point
              Park University, specializing in Big Data with a minor in Creative
              Writing. My focus is on applying data analytics, GIS, and urban
              planning principles to support sustainable and resilient city
              development.
              <br></br>
              <br></br>I currently work as an Academic Coach, helping students
              develop effective learning strategies, and as a Web Developer for
              Humane Action Pennsylvania, where I assist with maintaining and
              improving digital platforms. I’m also expanding my knowledge of
              GIS and data analytics to explore how data-driven insights can
              inform urban and environmental policy. Feel free to check out my
              resume and photography section, and reach out if you have any
              inquiries. Thanks for visiting.
            </Text>
            <ChakraLink
              href="Christian_Rangel_Resume-2025__.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
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
              src="/media/yearn-cow.jpg"
            ></Image>
          </Box>
        </Flex>
      </Stack>
      <PhotoSection />
    </Box>
  );
};

export default About;
