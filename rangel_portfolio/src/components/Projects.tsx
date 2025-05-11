import ProjectCard from "./ProjectCard";
import { Box, SimpleGrid } from "@chakra-ui/react";
import ProjectsHeader from "./ProjectsHeader";

const Projects = () => {
  const projects = [
    {
      title: "Ross West View Area State and County roads",
      imageSrc:
        "/media/Ross State and County Owned Roads.png",
      description: "A map of the Ross-West View area displaying state and county managed roads according to open county and state data",
      skills: ["QGIS","GIS"],
      altText: "Ross West View",
    },
    {
      title: "Ross Township Park Distance Zones Map",
      imageSrc: "/media/Ross_Township_Park_Distance_Map.png",
      description: "A map of Ross Township Parks with distance zones.",
      skills: ["QGIS"],
      altText: "Ross Township Park Distance Zones Map image",
    },
    {
      title: "JarWorld API",
      githubLink: "https://github.com/ctrangel/API",
      imageSrc: "/media/yearn-cow.jpg",
      gifSrc: "./media/JarGif.gif",
      description:
        "An inventory management system with login, and data manipulation features making calls to a RESTful API.",
      skills: ["JavaScript", "Express.js", "node.js", "postgreSQL"],
      altText: "JarWorld API image",
    },
    {
      title: "PTI Comp Page",
      githubLink: "https://github.com/ctrangel/webdesign-comp-page",
      imageSrc: "pti-comp.png",
      description:
        "An Informational website for my club's web design competition",
      skills: ["webdesign", "CSS"],
      altText: "PTI Webdesign Competition image",
    },
    {
      title: "Project X",
      githubLink: "https://github.com/ctrangel/project-x",
      imageSrc: "/media/project-x.png",
      gifSrc: "/media/project-x.gif",
      description:
        "A music-themed website offering headlines, music genre playback, and a playlist-building feature.",
      skills: ["JavaScript", "CSS"],
      altText: "Project-x image",
    },
    {
      title: "Limitlesstech.solutions",
      githubLink: "https://github.com/ctrangel/Limitless-consulting",
      imageSrc: "/media/limitless-solutions.png",
      gifSrc: "/media/limitless-solutions.gif",
      description:
        "A Project to transfer a wix website to an independent site for a business",
      skills: ["JavaScript", "CSS"],
      altText: "Limitlesstech.solutions project image",
    },
  ];

  return (
    <Box as={"section"} w={"100%"}>
      <ProjectsHeader />
      <SimpleGrid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        id="projects-grid"
        spacing="8px"
        justifyItems="center"
        justifyContent={"center"}
        w="100%"
        overflow="hidden"
        px={{ base: "50px", xl: "400px", "2xl": "450px" }}
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Projects;
