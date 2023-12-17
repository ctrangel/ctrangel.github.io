import { ChakraProvider, CSSReset, extendTheme } from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";
import * as React from "react";
import App from "./App";

// Extend the theme to include custom colors, fonts, etc
const theme = extendTheme({
  colors: {
    primary: { cyan: "#00FFFF" },
    secondary: { black: "#000000" },
  },
  fonts: {
    heading: "Montserrat",
    body: "Montserrat",
  },
  styles: {
    global: {
      body: {
        bg: "black",
        color: "white",
      },
    },
  },
});

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
