import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom";
import CV from "./CV";
import { theme } from './config/theme';



ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <CV />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
