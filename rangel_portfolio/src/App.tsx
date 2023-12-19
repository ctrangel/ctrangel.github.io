import { CSSReset, ChakraProvider } from "@chakra-ui/react";
import { Intro } from "./components/Intro";
import Navbar from "./components/Navbar";
import About from "./components/About";

function App() {
  return (
    <ChakraProvider>
      <CSSReset />
      <Navbar />
      <div
        style={{
          backgroundColor: "#2d3333",
          height: "115vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "-20vh",
        }}
      >
        <Intro />
      </div>
      <div style={{ height: "100vh", backgroundColor: "lightgray" }}>
        <About />
      </div>
    </ChakraProvider>
  );
}

export default App;
