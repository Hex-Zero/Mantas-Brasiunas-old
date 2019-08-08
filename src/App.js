import React from "react"
import Background from "./components/Background"
import Cover from "./components/Cover"
import Projects from "./components/Projects"
import Connect from "./components/Connect"
import styled, { keyframes } from "styled-components"

function App() {
  return (
    <Styled>
      <Background />
      <Cover />
      <Projects />
      <Connect />
    </Styled>
  )
}
const show = keyframes`
0%{
  opacity: 0;
}
100%{
  opacity: 1;
}
`

const Styled = styled.div`
  opacity: 0;
  animation: ${show} 600ms forwards;
`
export default App
