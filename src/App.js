import * as React from "react";

// 1. import `ChakraProvider` component
import { ChakraProvider, Heading } from "@chakra-ui/react";
import Header from "./components/layout/Header";
import Section from "./components/Section";
import "./App.css";
import Home from "./pages/Home";
import 'hover.css/css/hover-min.css';
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";

export default function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <Header />
      <Home />
      {/* <Page1 /> */}
      {/* <Page2 /> */}
    </ChakraProvider>
  );
}
