import { CSSReset, ChakraProvider } from "@chakra-ui/react";
import { Intro } from "./components/Intro";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Contact from "./components/Contact";
import "./App.css";


function App() {
  return (
    <ChakraProvider>
      <CSSReset />
      <Navbar />
      <div
        id="Home-section"
        style={{
          backgroundColor: "#2d3333",
          height: "115vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "-20vh",
          position: "relative", 
        }}
      >
        <Intro />
      </div>
      <div
        id="About-section"
        style={{
          height: "160vh",
          backgroundColor: "#2d3333",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <About />
      </div>
      <div
        id="Projects-section"
        style={{
          height: "292vh",
          backgroundColor: "#2d3333",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Projects />
      </div>
      <div id="Technologies-section" 
      style={{
        height: "100vh",
        backgroundColor: "#2d3333",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
      >
        {/* <Technologies /> */}
      </div>
      <div id="Contact-section" style={{
        backgroundColor: "#2d3333",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
      }}>
        <Contact />
      </div>
    </ChakraProvider>
  );
}

export default App;
