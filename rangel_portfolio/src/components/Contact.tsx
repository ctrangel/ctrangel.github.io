import React from "react";
import { Box, Heading, Flex, IconButton, Tooltip } from "@chakra-ui/react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Heading as="h2" mb={4} color={"white"}>
        Contact Me
      </Heading>
      <Flex
        align="center"
        justify="center"
        direction="row"
        m={10}
        alignItems={"flex-start"}
      >
        <Tooltip label="Email" hasArrow placement="top" m={5}>
          <IconButton
            aria-label="Email"
            icon={<FaEnvelope />}
            size="lg"
            colorScheme="teal"
            mb={4}
            mr={5}
            onClick={() => window.open("mailto:rangeltchristian@gmail.com")}
          />
        </Tooltip>
        <Tooltip label="GitHub" hasArrow placement="top">
          <IconButton
            aria-label="GitHub"
            icon={<FaGithub />}
            size="lg"
            colorScheme="teal"
            mb={4}
            mr={5}
            onClick={() => window.open("https://github.com/ctrangel")}
          />
        </Tooltip>
        <Tooltip label="LinkedIn" hasArrow placement="top">
          <IconButton
            aria-label="LinkedIn"
            icon={<FaLinkedin />}
            size="lg"
            colorScheme="teal"
            mr={5}
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/christian-rangel-9406a0189/"
              )
            }
          />
        </Tooltip>
        {/* Add more social icons as needed */}
      </Flex>
    </Box>
  );
};

export default Contact;
