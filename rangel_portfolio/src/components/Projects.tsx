import React from "react";
import {
  Box,
  Heading,
  Text,
  Flex,
  SimpleGrid,
  GridItem,
  Card,
  CardBody,
} from "@chakra-ui/react";

interface Project {
  id: number;
  title: string;
  description: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Project 1",
    description: "Description of Project 1",
  },
  {
    id: 2,
    title: "Project 2",
    description: "Description of Project 2",
  },
];

const Projects: React.FC = () => {
  return (
    <Box display={"flex"} justifyContent={"flex-start"} flexDirection={"column"}>
      <div
        style={{
          marginTop: "20vh",
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
          Projects
        </Box>
      </div>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
        {projectsData.map((project) => (
          <GridItem key={project.id}>
            <Card>
              <CardBody>
                <Heading as="h3" size="md" mb={2}>
                  {project.title}
                </Heading>
                <Text>{project.description}</Text>
              </CardBody>
            </Card>
          </GridItem>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Projects;
