import { Box, Stack } from "@chakra-ui/react";
import React from "react";
import { Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Link as ChakraLink } from "@chakra-ui/react";


const About = () => {
  return (
    <Stack width={{ base: "100%", md: "50%" }}>
      <div
        style={{
          marginTop: "15vh",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          borderRadius="md"
          bg="#FFB612"
          color="white"
          px={4}
          h={7}
          m={5}
          p={5}
          style={{
            fontSize: "30px",
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          About
        </Box>
        <Text color={"white"} fontSize={"40px"}>
          Me
        </Text>
      </div>
      <div>
        <div>
          <Text
            color={"white"}
            fontSize={"15px"}
            textAlign={"left"}
            style={{
              width: "100%",
              padding: "50px",
            }}
          >
            Hello! I'm Christian and I'm a second year Computer Science student
            major at Point Park University with an interest in web development
            and automation. With my creative ideas and skillset, I enjoy
            creating applications that are visually appealing and engaging.
            <br></br>
            <br></br>
            I'm currently learning React, TypeScript, Node.JS and Chakra UI
            while working on my portfolio.
            <br></br>
            <br></br>
            I'm also working on other projects involving python and automation.
            I'm currently looking for an internship in Software Development or
            Web Development for Summer 2023.
          </Text>
          <ChakraLink href="/Christian-Rangel-Resume.pdf">
            <Text
              color={"white"}
              fontSize={"15px"}
              textAlign={"left"}
              style={{
                width: "100%",
                padding: "50px",
                textDecoration: "underline",
                color: "cyan",
              }}
            >
              View my Resume
            </Text>
          </ChakraLink>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            boxShadow={"cyan 3vw 3vw"}
            w={"50%"}
            h={"39vh"}
            src="/DSC_0021-removebg-preview.png"
          ></Image>
        </div>
      </div>
    </Stack>
  );
};

export default About;
