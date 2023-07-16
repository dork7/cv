import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom";
import CV from "./CV";
import { theme } from './config/theme';

import '../style.css'

ReactDOM.render(
  <React.StrictMode>
    {/* <span className="grd-txt">lol</span> */}
    <ChakraProvider theme={theme}>
      <CV />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
