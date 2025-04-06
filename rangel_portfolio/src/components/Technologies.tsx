import { Box, Heading, SimpleGrid, Container, Card } from "@chakra-ui/react";
import { DiJsBadge } from "react-icons/di";
import LilDude from "./LilDude";
import TechCard from "./TechCard";
import { SiPython, SiTypescript, SiMysql, SiC, SiReact, SiBootstrap, SiChakraui, SiGit, SiQgis, SiExpress, SiTableau, SiBulma } from "react-icons/si";
import { DiRuby, DiNodejsSmall } from "react-icons/di";

const Technologies = () => {
  const iconSize = "30px";
  const langColor = "cyan"
  const frontEndColor = "#38a169";
  const backEndColor = "#905da2";
  const toolColor = "yellow"
  const langData = [
    {
      name: "JavaScript",
      icon: <DiJsBadge color={langColor} size={iconSize} />,
    },
    {
      name: "Python",
      icon: <SiPython color={langColor} size={iconSize} />,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript color={langColor} size={iconSize} />,
    },
    {
      name: "MySQL",
      icon: <SiMysql color={langColor} size={iconSize} />,
    },
    {
      name: "C",
      icon: <SiC color={langColor} size={iconSize} />,
    },
    {
      name: "Ruby",
      icon: <DiRuby color={langColor} size={iconSize} />,
    },
  ];
  const frontEndData = [
    {
      name: "React.js",
      icon: <SiReact color={frontEndColor} size={iconSize} />,
    },
    {
      name: "Chakra UI",
      icon: <SiChakraui color={frontEndColor} size={iconSize} />,
    },
    {
      name: "Bootstrap",
      icon: <SiBootstrap color={frontEndColor} size={iconSize} />,
    },
    {
      name: "Bulma CSS",
      icon: <SiBulma color={frontEndColor} size={iconSize} />,
    }
  ];
  const backEndData = [
    {
      name: "Node.js",
      icon: <DiNodejsSmall color={backEndColor} size={iconSize} />,
    },
    {
      name: "Express.js",
      icon: <SiExpress color={backEndColor} size={iconSize} />,
    }
  ];
  const toolData = [
    {
      name: "Git",
      icon: <SiGit color={toolColor} size={iconSize} />,
    },
    {
      name: "QGIS",
      icon: <SiQgis color={toolColor} size={iconSize} />,
    },
    {
      name: "Tableau",
      icon: <SiTableau color={toolColor} size={iconSize} />,
    },
    {
      name: "Excel",
      icon: "#",
    },
  ];

  return (
    <Box>
      <Box display={"flex"} flexDir={"column"} alignItems={"center"} mt={"80px"}>
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
          lg: "repeat(3, 1fr)",
          xl: "repeat(3, 1fr)",
          "2xl": "repeat(4, 1fr)",
        }}
        shadow={"0px 0px 20px 20px rgba(0, 0, 0, 0.25)"}
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
