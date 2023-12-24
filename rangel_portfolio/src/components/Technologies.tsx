import React from "react";
import {
  Box,
  Heading,
  SimpleGrid,
  GridItem,
  Text,
  Container,
  Card,
  Icon,
} from "@chakra-ui/react";
import { DiJsBadge } from "react-icons/di";
import { IconButton } from "@chakra-ui/react";
import { Tooltip } from "@chakra-ui/react";

const Technologies = () => {
  const cardStyles = {
    p: 3,
    bg: "gray",
    m: "8px",
    boxShadow: "#6FA25D 8px 6px 0px 1px",
    color: "white",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  };

  return (
    <Container
      display={"grid"}
      justifyContent={"center"}
      justifyItems={"center"}
      mt={"-20vh"}
      w={"100%"}
    >
      <Box w={"80px"} h={"80px"}>
        <iframe
          src="https://giphy.com/embed/jPsraWbk0eJHxp474l"
          width="80px"
          height="80px"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </Box>

      <Box id="Technologies-header"
        color={"white"}
        bg={"#905DA2"}
        borderRadius={"10px"}
        p={1}
        w={"40vh"}
        mt={"-3"}
        display={"flex"}
        justifyContent={"center"}
        fontWeight={"bold"}
        fontSize={"2em"}
        overflow={"hidden"}
      >
        Technologies
      </Box>

      <Container
        w={"100%"}
        mx={"auto"}
        display={"grid"}
        justifyContent={"start"}
        mt={16}
      >
        <Box
          w={"315px"}
          display={"flex"}
          justifyContent={"flex-start"}
          color={"white"}
        >
          <Heading>Languages</Heading>
        </Box>
        <Card sx={cardStyles}>
          <Box mx={5}>
            <DiJsBadge width={"20px"} />
          </Box>
          JavaScript
        </Card>
        <Card sx={cardStyles}>Python</Card>
        <Card sx={cardStyles}>TypeScript</Card>
        <Card sx={cardStyles}>SQL</Card>
        <Card sx={cardStyles}>C</Card>
        <Card sx={cardStyles}>Ruby</Card>
      </Container>
      <Container
        w={"100%"}
        mx={"auto"}
        display={"grid"}
        justifyContent={"start"}
      >
        <Box
          w={"315px"}
          display={"flex"}
          justifyContent={"flex-start"}
          color={"white"}
        >
          <Heading>FrontEnd</Heading>
        </Box>
        <Card sx={cardStyles}>React.js</Card>
        <Card sx={cardStyles}>Chakra UI</Card>
        <Card sx={cardStyles}>Bootstrap</Card>
      </Container>
      <Container
        w={"100%"}
        mx={"auto"}
        display={"grid"}
        justifyContent={"start"}
      >
        <Box
          w={"315px"}
          display={"flex"}
          justifyContent={"flex-start"}
          color={"white"}
        >
          <Heading>BackEnd</Heading>
        </Box>
        <Card sx={cardStyles}>Node.js</Card>
      </Container>
      <Container
        w={"100%"}
        mx={"auto"}
        display={"grid"}
        justifyContent={"start"}
      >
        <Box
          w={"315px"}
          display={"flex"}
          justifyContent={"flex-start"}
          color={"white"}
        >
          <Heading>Tools</Heading>
        </Box>
        <Card sx={cardStyles}>Git</Card>
      </Container>
    </Container>
  );
};

export default Technologies;
