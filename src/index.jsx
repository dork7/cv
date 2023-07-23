import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom";
import CV from "./CV";
import { theme } from './config/theme';
import CVPage from './pages/CV'
import '../style.css'

ReactDOM.render(
  <React.StrictMode>
    {/* <ChakraProvider theme={theme}> */}
    {/* <CV /> */}
    <CVPage />
    {/* </ChakraProvider> */}
  </React.StrictMode>,
  document.getElementById("root")
);
