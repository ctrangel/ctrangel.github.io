import React from "react";
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  IconButton,
  Image,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import shakeAnimation from "./ShakeAnimation";

interface Project {
  title: string;
  githubLink: string;
  imageSrc: string;
  description: string;
  gifSrc: string; 
  skills: string[];
  altText: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const displaySkills = (project: { skills: string | any[] }) => {
    let result = [];

    for (let i = 0; i < project.skills.length; i++) {
      result.push(
        <Box
          key={i}
          borderRadius="md"
          bg="#FFB612"
          color="white"
          px={4}
          h={7}
          mr={5}
          mt={5}
        >
          <p>{project.skills[i]}</p>
        </Box>
      );
    }

    return result;
  };

  const cardStyles = {
    // for the cards in the projects grid
    mt: { base: 3 },
    w: { base: "300px", sm: "340px", lg: "320px", xl: "390px" },
    maxW: { base: "300px", sm: "340px", lg: "320px", xl: "390" },
    h: "auto",
    p: 1,
    color: "white",
    bgColor: "grey",
    borderRadius: "10px",
  };

  return (
    <Card {...cardStyles}>
      <Box display={"flex"} justifyContent={"flex-end"}>
        <IconButton
          aria-label="GitHub"
          icon={<FaGithub />}
          size="lg"
          color="white"
          bgColor={"#FFB612"}
          w={"2em"}
          mb={4}
          onClick={() => window.open(project.githubLink)}
          transition={" .5s"}
          _hover={{
            bgColor: "#905DA2",
            animation: `${shakeAnimation} infinite .6s`,
          }}
        />
      </Box>

      <CardHeader
        mb={5}
        fontSize={{ base: "25", sm: "35", md: "35" }}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box maxW={"11em"} fontSize={"24px"} overflowWrap={"break-word"}>
          {project.title}
        </Box>
      </CardHeader>
      <Box
        p={5}
        maxW={{ base: "100%", sm: "370", md: "370" }}
        maxH={{ base: "auto", sm: "170", md: "170" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        m={"auto"}
        overflow={"hidden"}
      >
        <Image
          w={{ base: "100%", sm: "370", md: "370" }}
          h={{ base: "auto", sm: "170", md: "170" }}
          transition={"ll .2s ease-in-out"}
          borderRadius={"10px"}
          src={isHovered ? project.gifSrc : project.imageSrc}
          alt={project.altText}
        />
      </Box>

      <CardBody>
        <p>{project.description}</p>
      </CardBody>
      <CardFooter
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
        flexDirection="row"
        flexWrap={"wrap"}
      >
        {displaySkills({ skills: project.skills })}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
