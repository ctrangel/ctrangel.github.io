import React from "react";
import { Box, Heading, Flex, IconButton, Tooltip } from "@chakra-ui/react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <Box>
      <Heading as="h2" mb={4}>
        Contact Me
      </Heading>
      <Flex align="center" justify="center" direction="column">
        <Tooltip label="Email" hasArrow placement="top">
          <IconButton
            aria-label="Email"
            icon={<FaEnvelope />}
            size="lg"
            colorScheme="teal"
            mb={4}
            onClick={() => window.open("mailto:your.email@example.com")}
          />
        </Tooltip>
        <Tooltip label="GitHub" hasArrow placement="top">
          <IconButton
            aria-label="GitHub"
            icon={<FaGithub />}
            size="lg"
            colorScheme="teal"
            mb={4}
            onClick={() => window.open("https://github.com/yourusername")}
          />
        </Tooltip>
        <Tooltip label="LinkedIn" hasArrow placement="top">
          <IconButton
            aria-label="LinkedIn"
            icon={<FaLinkedin />}
            size="lg"
            colorScheme="teal"
            onClick={() =>
              window.open("https://www.linkedin.com/in/yourusername")
            }
          />
        </Tooltip>
        {/* Add more social icons as needed */}
      </Flex>
    </Box>
  );
};

export default Contact;
