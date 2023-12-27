import React from "react";
import { Box, Heading, Flex, IconButton, Tooltip } from "@chakra-ui/react";
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Text } from "@chakra-ui/react";

const Contact: React.FC = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Heading as="h2" mb={4} color={"white"}>
        Contact Me
      </Heading>
      <Text fontSize="15px" color="white" textAlign="center" width="70%">
        Feel free to contact me with any questions concerns, or just want to
        connect
      </Text>
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Tooltip label="Email" hasArrow placement="top" m={5}>
          <IconButton
            aria-label="Email"
            icon={<FaEnvelope />}
            size="lg"
            colorScheme="blue"
            m={5}
            onClick={() => window.open("mailto:rangeltchristian@gmail.com")}
          />
        </Tooltip>
        <Tooltip label="GitHub" hasArrow placement="top">
          <IconButton
            aria-label="GitHub"
            icon={<FaGithub />}
            size="lg"
            colorScheme="green"
            m={5}
            onClick={() => window.open("https://github.com/ctrangel")}
          />
        </Tooltip>
        <Tooltip label="LinkedIn" hasArrow placement="top">
          <IconButton
            aria-label="LinkedIn"
            icon={<FaLinkedin />}
            size="lg"
            colorScheme="purple"
            m={5}
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/christian-rangel-9406a0189/"
              )
            }
          />
        </Tooltip>
        <Tooltip label="Instagram" hasArrow placement="top">
          <IconButton
            aria-label="Instagram"
            icon={<FaInstagram />}
            size="lg"
            colorScheme="yellow"
            m={5}
            onClick={() => window.open("https://www.instagram.com/crangel__/")}
          />
        </Tooltip>
      </Box>
    </Box>
  );
};

export default Contact;
