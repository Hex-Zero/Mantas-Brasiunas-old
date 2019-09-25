import React from "react";
import Cube from "./assets/logos/Cube";
import Background from "./components/Background";
import Burger from "./components/Burger";
import Projects from "./components/Projects";
import { ModalProvider } from "./context/ModalContext";

function App() {
  return (
    <ModalProvider>
      <Background />
      <Projects />
      <Burger />
      <Cube />
    </ModalProvider>
  );
}
export default App;
