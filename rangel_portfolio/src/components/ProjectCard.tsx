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

interface Project {
  title: string;
  githubLink: string;
  imageSrc: string;
  description: string;
  gifSrc: string; // Assuming you want to add a gif source as well
  skills: string[];
  altText: string;
}


interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const displaySkills = (project: { skills: string | any[] }) => {
    //typescript kept yelling at me until I added the type, its so mean
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
      // console.log(project.skills[i]);
    }

    return result;
  };

  const cardStyles = {
    // for the cards in the projects grid
    mt: { base: 3 },
    w: { base: "300px", sm: "340px", lg: "320px", xl: "390px" },
    maxW: { base: "300px", sm: "340px", lg: "320px", xl: "390" },
    h: { base: "500px" },
    maxH: { base: "500px" },
    p: 1,
    color: "white",
    bgColor: "grey",
    borderRadius: "10px",
    border: "5px solid cyan",
    boxShadow: "0px 8px 32px rgba(0, 0, 0, 0.25)",
  };

  return (
    <Card {...cardStyles}>
      <CardHeader
        mb={5}
        fontSize={{ base: "25", sm: "35", md: "35" }}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box maxW={"237px"} fontSize={"24px"}>
          {project.title}
        </Box>

        <IconButton
          aria-label="GitHub"
          icon={<FaGithub />}
          size="lg"
          colorScheme=""
          border="2px solid"
          borderColor="cyan"
          mb={4}
          onClick={() => window.open(project.githubLink)}
        />
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
      >
        {displaySkills({ skills: project.skills })}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
