import { CSSReset, ChakraProvider } from "@chakra-ui/react";
import  { Intro } from "./components/Intro";
import Navbar from "./components/Navbar";
import About from "./components/About";

function App() {
  return (
    <ChakraProvider>
      <CSSReset />
      <Navbar />
      <div style={{ backgroundColor: "gray" }}>
        <div style={{ height: "100vh" }}>
          <Intro />
        </div>

        <div style={{ height: "100vh", backgroundColor: "lightgray" }}>
          <About />
        </div>
      </div>
    </ChakraProvider>
  );
}

export default App;
