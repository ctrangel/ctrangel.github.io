import { Box, ChakraProvider } from "@chakra-ui/react";
import { Intro } from "./components/Intro";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import ProjectsTest from "./components/ProjectsTest";
import Technologies from "./components/Technologies";
import Contact from "./components/Contact";
import "./App.css";
import { extendTheme } from "@chakra-ui/react";
import ContentSection from "./components/ContentSection";

const breakpoints = {
  base: "0px",
  sm: "375px",
  md: "768px",
  lg: "1024px",
  xl: "1200px",
  "2xl": "1580px",
};

const posts = "./posts/posts.json";

const theme = extendTheme({ breakpoints });

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />

      <Box
        as={"section"}
        id="Home-section"
        h="80em"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        mt="-20em"
        position="relative"
      >
        <Intro />
      </Box>
      <Box
        id="About-section"
        h="auto"
        backgroundColor="#2d3333"
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="center"
      >
        <About />
      </Box>
      <Box
        id="Content-section"
        h="auto"
        backgroundColor="#2d3333"
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="center"
      >
        <ContentSection />
      </Box>
      <Box
        id="Projects-section"
        h={"auto"}
        backgroundColor="#2d3333"
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="center"
        mt={"100px"}
      >
        <Projects />
      </Box>
      <Box
        id="Technologies-section"
        bg={"#2d3333"}
        h={"auto"}
        display="flex"
        justifyContent="center"
        alignItems="center"
        w="100%"
        mt={{ base: "142px" }}
      >
        <Technologies />
      </Box>
      <Box
        id="Contact-section"
        h={{ base: "500px" }}
        backgroundColor="#2d3333"
        display="flex"
        flexDirection="column"
        justifyContent="flex-end"
        alignItems="center"
      >
        <Contact />
      </Box>
    </ChakraProvider>
  );
}

export default App;
