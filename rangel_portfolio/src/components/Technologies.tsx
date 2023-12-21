import React from "react";
import { Box, Heading, SimpleGrid, GridItem, Text } from "@chakra-ui/react";

interface Technology {
  id: number;
  name: string;
  description: string;
}

const technologiesData: Technology[] = [
  {
    id: 1,
    name: "React",
    description: "A JavaScript library for building user interfaces.",
  },
  {
    id: 2,
    name: "Chakra UI",
    description:
      "A simple, modular, and accessible component library for React.",
  },
  {
    id: 3,
    name: "TypeScript",
    description:
      "A superset of JavaScript that adds static typing to the language.",
  },
  // Add more technologies as needed
];

const Technologies: React.FC = () => {
  return (
    <Box marginTop={"20vh"} color={"Black"} style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <Box
        borderRadius="md"
        bg="#FFB612"
        color="white"
        px={4}
        h={7}
        p={10}
        w={"sm"}
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
        <Heading
        >
          Technologies
        </Heading>
      </Box>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
        {technologiesData.map((technology) => (
          <GridItem key={technology.id}>
            <Box
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              bg={"white"}
            >
              <Box p="6">
                <Heading as="h3" size="md" mb={2}>
                  {technology.name}
                </Heading>
                <Text>{technology.description}</Text>
              </Box>
            </Box>
          </GridItem>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Technologies;
