import * as React from "react";
import * as ReactDOM from "react-dom/client";


// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import NavDrawer from "./components/Drawer";

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <Header />
      <NavDrawer />
    </ChakraProvider>
  );
}

export default App;



