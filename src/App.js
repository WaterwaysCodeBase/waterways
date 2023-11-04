import * as React from "react";

// 1. import `ChakraProvider` component
import { ChakraProvider, Heading } from "@chakra-ui/react";
import Header from "./components/layout/Header";
import Section from "./components/Section";
import "./App.css";
import Home from "./pages/Home";
import 'hover.css/css/hover-min.css';

export default function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <Header />
      <Home />
    </ChakraProvider>
  );
}
