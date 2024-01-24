import { ChakraProvider} from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";
import * as React from "react";
import App from "./App";



const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <ChakraProvider >
        <App />
      </ChakraProvider>
    </React.StrictMode>
  );
}