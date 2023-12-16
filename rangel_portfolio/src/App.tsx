import * as React from "react";
import * as ReactDOM from "react-dom/client";



import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import NavDrawer from "./components/Drawer";

function App() {
  return (
    <ChakraProvider>
      <Header />
      <NavDrawer />
    </ChakraProvider>
  );
}

export default App;



