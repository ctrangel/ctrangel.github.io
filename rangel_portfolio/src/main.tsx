import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";
import * as React from "react";
import App from "./App";

// Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ colors });

// Pass the `theme` prop to the `ChakraProvider`
const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </React.StrictMode>
  );
}
  
