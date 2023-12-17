import { CSSReset, ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import NavDrawer from "./components/Drawer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <ChakraProvider>
      <CSSReset />
      <Navbar />
      <div style={{ backgroundColor: "gray" }}>
        <div style={{ height: "100vh" }}>
          <Header />
        </div>
      </div>
    </ChakraProvider>
  );
}

export default App;
