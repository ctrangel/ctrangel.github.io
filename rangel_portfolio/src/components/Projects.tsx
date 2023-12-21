import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { IconButton } from "@chakra-ui/react";

function Projects() {
  const [isHovered, setIsHovered] = React.useState(false);

  const project1 = {
    title: "Project X",
    description:
      "A music-themed website offering headlines, music genre playback, and a playlist-building feature.",
    image: "/media/project-x.png",
    gif: "/media/project-x.gif",
    link: "https://github.com/ctrangel/project-x",
  };
  const project2 = {
    title: "Limitlesstech.solutions",
    description: "A project that does something",
    image: "###",
    gif: "###",
    link: "https://limitlesstech.solutions/",
  };

  const project3 = {
    title: "Scholarship-auto-fill",
    description:
      "Python script that automatically fills out scholarship applications.",
    image: "###",
    gif: "###",
    link: "/",
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
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
          _hover={{ bg: "cyan", color: "black", transform: "scale(1.1)" }}
          style={{
            fontSize: "40px",
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Projects
        </Box>
      </div>
      <Flex flexWrap="wrap" justifyContent="center">
        <Card
          w={{ base: "100%", sm: "sm", md: "sm" }}
          maxW="sm"
          h={{ base: "auto", sm: "550", md: "550" }}
          maxH={{ base: "auto", sm: "550", md: "550" }}
          m={5}
          p={5}
          color="white"
          style={{
            backgroundColor: "grey",
            borderRadius: "10px",
            border: "5px solid cyan",
            boxShadow: "0px 8px 32px rgba(0, 0, 0, 0.25)",
          }}
        >
          <CardHeader
            mb={5}
            fontSize={{ base: "25", sm: "35", md: "35" }}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {project1.title}
            <IconButton
              aria-label="GitHub"
              icon={<FaGithub />}
              size="lg"
              colorScheme=""
              border="2px solid"
              borderColor="cyan"
              mb={4}
              onClick={() => window.open(project1.link)}
            />
          </CardHeader>
          <Box
            p={5}
            maxW={{ base: "100%", sm: "370", md: "370" }}
            maxH={{ base: "auto", sm: "170", md: "170" }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "auto",
              overflow: "hidden",
            }}
          >
            <Image
              w={{ base: "100%", sm: "370", md: "370" }}
              h={{ base: "auto", sm: "170", md: "170" }}
              style={{
                transition: "all .2s ease-in-out",
                borderRadius: "10px",
              }}
              src={isHovered ? project1.gif : project1.image}
              alt={project1.title}
            />
          </Box>

          <CardBody>
            <p>{project1.description}</p>
          </CardBody>
          <CardFooter
            display="flex"
            alignItems="center"
            justifyContent="flex-start"
            flexDirection="row"
          >
            <Box
              borderRadius="md"
              bg="#FFB612"
              color="white"
              px={4}
              h={7}
              mr={5}
            >
              <p>JavaScript</p>
            </Box>
            <Box borderRadius="md" bg="#FFB612" color="white" px={4} h={7}>
              <p>CSS</p>
            </Box>
          </CardFooter>
        </Card>
        <Card
          w={{ base: "100%", sm: "sm", md: "sm" }}
          maxW="sm"
          h={{ base: "auto", sm: "550", md: "550" }}
          maxH={{ base: "auto", sm: "550", md: "550" }}
          m={5}
          p={5}
          color="white"
          style={{
            backgroundColor: "grey",
            borderRadius: "10px",
            border: "5px solid cyan",
            boxShadow: "0px 8px 32px rgba(0, 0, 0, 0.25)",
          }}
        >
          <CardHeader
            mb={5}
            fontSize={{ base: "25", sm: "35", md: "35" }}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {project1.title}
            <IconButton
              aria-label="GitHub"
              icon={<FaGithub />}
              size="lg"
              colorScheme=""
              border="2px solid"
              borderColor="cyan"
              mb={4}
              onClick={() => window.open(project1.link)}
            />
          </CardHeader>
          <Box
            p={5}
            maxW={{ base: "100%", sm: "370", md: "370" }}
            maxH={{ base: "auto", sm: "170", md: "170" }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "auto",
              overflow: "hidden",
            }}
          >
            <Image
              w={{ base: "100%", sm: "370", md: "370" }}
              h={{ base: "auto", sm: "170", md: "170" }}
              style={{
                transition: "all .2s ease-in-out",
                borderRadius: "10px",
              }}
              src={isHovered ? project1.gif : project1.image}
              alt={project1.title}
            />
          </Box>

          <CardBody>
            <p>{project1.description}</p>
          </CardBody>
          <CardFooter
            display="flex"
            alignItems="center"
            justifyContent="flex-start"
            flexDirection="row"
          >
            <Box
              borderRadius="md"
              bg="#FFB612"
              color="white"
              px={4}
              h={7}
              mr={5}
            >
              <p>JavaScript</p>
            </Box>
            <Box borderRadius="md" bg="#FFB612" color="white" px={4} h={7}>
              <p>CSS</p>
            </Box>
          </CardFooter>
        </Card>
        <Card
          w={{ base: "100%", sm: "sm", md: "sm" }}
          maxW="sm"
          h={{ base: "auto", sm: "550", md: "550" }}
          maxH={{ base: "auto", sm: "550", md: "550" }}
          m={5}
          p={5}
          color="white"
          style={{
            backgroundColor: "grey",
            borderRadius: "10px",
            border: "5px solid cyan",
            boxShadow: "0px 8px 32px rgba(0, 0, 0, 0.25)",
          }}
        >
          <CardHeader
            mb={5}
            fontSize={{ base: "25", sm: "35", md: "35" }}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {project1.title}
            <IconButton
              aria-label="GitHub"
              icon={<FaGithub />}
              size="lg"
              colorScheme=""
              border="2px solid"
              borderColor="cyan"
              mb={4}
              onClick={() => window.open(project1.link)}
            />
          </CardHeader>
          <Box
            p={5}
            maxW={{ base: "100%", sm: "370", md: "370" }}
            maxH={{ base: "auto", sm: "170", md: "170" }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "auto",
              overflow: "hidden",
            }}
          >
            <Image
              w={{ base: "100%", sm: "370", md: "370" }}
              h={{ base: "auto", sm: "170", md: "170" }}
              style={{
                transition: "all .2s ease-in-out",
                borderRadius: "10px",
              }}
              src={isHovered ? project1.gif : project1.image}
              alt={project1.title}
            />
          </Box>

          <CardBody>
            <p>{project1.description}</p>
          </CardBody>
          <CardFooter
            display="flex"
            alignItems="center"
            justifyContent="flex-start"
            flexDirection="row"
          >
            <Box
              borderRadius="md"
              bg="#FFB612"
              color="white"
              px={4}
              h={7}
              mr={5}
            >
              <p>JavaScript</p>
            </Box>
            <Box borderRadius="md" bg="#FFB612" color="white" px={4} h={7}>
              <p>CSS</p>
            </Box>
          </CardFooter>
        </Card>
      </Flex>
    </div>
  );
}

export default Projects;
