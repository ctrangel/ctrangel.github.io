import React from "react";
import ProjectCard from "./ProjectCard"; // Adjust the import path based on your file structure
import { Box, SimpleGrid } from "@chakra-ui/react";
import ProjectsHeader from "./ProjectsHeader";

const ProjectsTest = () => {
  const projects = [
    {
      title: "Scholarship-auto-fill",
      githubLink: "https://github.com/ctrangel/form-auto-fill-public",
      imageSrc: "/media/big_kurt.jpg",
      gifSrc: "/media/form_script.gif",
      description:
        "Python script that automatically fills out scholarship applications.",
      skills: ["Python", "Selenium", "node.js"],
      altText: "Scholarship-auto-fill project image",
    },
    {
      title: "Scholarship-auto-fill",
      githubLink: "https://github.com/ctrangel/form-auto-fill-public",
      imageSrc: "/media/big_kurt.jpg",
      gifSrc: "/media/form_script.gif",
      description:
        "Python script that automatically fills out scholarship applications.",
      skills: ["Python", "Selenium", "node.js"],
      altText: "Scholarship-auto-fill project image",
    },
    {
      title: "Scholarship-auto-fill",
      githubLink: "https://github.com/ctrangel/form-auto-fill-public",
      imageSrc: "/media/big_kurt.jpg",
      gifSrc: "/media/form_script.gif",
      description:
        "Python script that automatically fills out scholarship applications.",
      skills: ["Python", "Selenium", "node.js"],
      altText: "Scholarship-auto-fill project image",
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

export default ProjectsTest;
