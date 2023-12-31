import * as React from "react";
import './App.css'

// 1. import `ChakraProvider` component
import { ChakraProvider, Heading } from "@chakra-ui/react";

import 'hover.css/css/hover-min.css';

import { AppRoutes } from "./routes/routes";

export default function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <AppRoutes />
    </ChakraProvider>
  );
}

