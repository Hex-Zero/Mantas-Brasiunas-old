import React from "react"
import styled, { keyframes } from "styled-components"
const Modal = ({ visible }) => {
  return (
    <Styled>
      <StyledModal visible={visible}>
        <p>Hello</p>
        <hr />
        <p>Hello</p>
        <hr />
        <p>Hello</p>
        <hr />
        <p>Hello</p>
        <hr />
        <p>Hello</p>
        <hr />
      </StyledModal>
    </Styled>
  )
}

const ModalIn = keyframes`
0%{margin-top: -400px}
100%{
    margin-top: 0px
}
`
// const ModalOut = keyframes`
// 0%{margin-top: -400px}
// 100%{
//     margin-top: 0px
// }
// `
const StyledModal = styled.div`
  visibility: ${props => (props.visible ? "visible" : "hidden")};
  top: 100px;
  position: fixed;
  width: 400px;
  height: 300px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  background: white;
  text-align: center;
  border: solid 3px #4ec3c9;
  border-radius: 4px;
  animation: ${props => (props.visible ? ModalIn : false)} 750ms linear;
  z-index: 3;
  @media only screen and (max-width: 600px) {
    width: 400px;
  }
`

const Styled = styled.div`
  /* margin-top: 100px;
  justify-content: center;
  width: 100%;
  display: flex;
  top: 0;
  position: fixed; */
`

export default Modal
