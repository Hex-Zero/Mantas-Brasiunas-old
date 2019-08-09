import React from "react"
import Background from "./components/Background"
import Projects from "./components/Projects"
import Connect from "./components/Connect"
import Cover from "./components/Cover"
import { ModalProvider } from "./context/ModalContext"

function App() {
  return (
    <ModalProvider>
      <Background />
      <Cover />
      <Projects />
      <Connect />
    </ModalProvider>
  )
}
export default App
