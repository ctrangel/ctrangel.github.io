import { Box, Heading, SimpleGrid, Container, Card } from "@chakra-ui/react";
import { DiJsBadge } from "react-icons/di";
import LilDude from "./LilDude";
import TechCard from "./TechCard";
import { SiPython } from "react-icons/si";
import { SiTypescript } from "react-icons/si";

const Technologies = () => {
  const iconSize = "30px";
  const langData = [
    {
      name: "JavaScript",
      icon: <DiJsBadge color="cyan" size={iconSize} />,
    },
    {
      name: "Python",
      icon: <SiPython color="cyan" size={iconSize} />,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript color="cyan" size={iconSize} />,
    },
    {
      name: "SQL",
      icon: <DiJsBadge color="cyan" size={iconSize} />,
    },
    {
      name: "C",
      icon: <DiJsBadge color="cyan" size={iconSize} />,
    },
    {
      name: "Ruby",
      icon: <DiJsBadge color="cyan" size={iconSize} />,
    },
  ];
  const frontEndData = [
    {
      name: "React.js",
      icon: <DiJsBadge color="#38a169" size={iconSize} />,
    },
    {
      name: "Chakra UI",
      icon: <DiJsBadge />,
    },
    {
      name: "Bootstrap",
      icon: <DiJsBadge />,
    },
  ];
  const backEndData = [
    {
      name: "Node.js",
      icon: <DiJsBadge />,
    },
  ];
  const toolData = [
    {
      name: "Git",
      icon: <DiJsBadge />,
    },
  ];

  return (
    <Box>
      <Box display={"flex"} flexDir={"column"} alignItems={"center"}>
        <LilDude />
        <Box
          id="Technologies-header"
          color={"white"}
          bg={"#905DA2"}
          borderRadius={"10px"}
          p={1}
          w={"240px"}
          mt={"-3"}
          display={"flex"}
          justifyContent={"center"}
          fontWeight={"bold"}
          fontSize={"2em"}
          overflow={"hidden"}
        >
          Technologies
        </Box>
      </Box>
      <SimpleGrid
        display={"grid"}
        justifyContent={"center"}
        justifyItems={"center"}
        mt={{ base: "103px" }}
        w={"100%"}
        alignItems={"start"}
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(2, 1fr)",
          xl: "repeat(4, 1fr)",
        }}
        shadow={"0px 8px 32px rgba(0, 0, 0, 0.25)"}
        borderRadius={"10px"}
        pb={"50px"}
      >
        <TechCard techCards={langData} header="Languages" />
        <TechCard techCards={frontEndData} header="Frontend" />
        <TechCard techCards={backEndData} header="Backend" />
        <TechCard techCards={toolData} header="Tools" />
      </SimpleGrid>
    </Box>
  );
};

export default Technologies;
