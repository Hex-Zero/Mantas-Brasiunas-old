import React, { useState, useEffect } from "react"
import Background from "./components/Background"
import Cover from "./components/Cover"
import Projects from "./components/Projects"
import Connect from "./components/Connect"
import styled, { keyframes } from "styled-components"

function App() {
  const [show, setShow] = useState(false)

  const handleShow = value => {
    setShow(value)
  }

  useEffect(() => {
    setTimeout(handleShow(showContent), 800)
  }, [])
  return (
    <Styled show={show}>
      <Background />
      <Cover />
      <Projects />
      <Connect />
    </Styled>
  )
}
const showContent = keyframes`
0%{
  opacity: 0;
}
100%{
  opacity: 1;
}
`
const Styled = styled.div`
  opacity: 0;
  animation: ${props => props.show} 600ms forwards;
`
export default App
