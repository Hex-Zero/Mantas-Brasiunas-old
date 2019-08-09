import React, { useContext } from "react"
import con from "../assets/connect.png"
import styled from "styled-components"
import Modal from "./Modal"
import { ModalContext } from "../context/ModalContext"

const Connect = () => {
  const [visible, setVisible] = useContext(ModalContext)
  return (
    <Styled>
      <Modal />
      <Status />
      <Image src={con} alt="" onClick={() => setVisible(true)} />
    </Styled>
  )
}

const Image = styled.img`
  position: fixed;
  top: 0;
  right: 3px;
  cursor: pointer;
  width: 100px;
  z-index: 1;
`
const Status = styled.div`
  position: fixed;
  top: 67px;
  right: 62px;
  border-radius: 100%;
  width: 27px;
  height: 27px;
  background: radial-gradient(
    ellipse at center,
    rgba(255, 255, 0, 1) 0%,
    rgba(74, 206, 1, 1) 67%,
    rgba(74, 206, 1, 1) 100%
  );
  z-index: 0;
`
const Styled = styled.div`
  @media only screen and (max-width: 600px) {
  }
`

export default Connect
