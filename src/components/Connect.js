import React, { useState } from "react"
import con from "../assets/connect.png"
import styled, { keyframes } from "styled-components"
import Modal from "./Modal"
const Connect = () => {
  const [cover, setVisible] = useState("hidden")
  const [coverAnim, setCoverAnim] = useState()
  const [modal, setModal] = useState(false)
  const handleModal = value => {
    if (value) {
      setVisible("visible")
      setModal(true)
      setCoverAnim(coverUp)
    } else {
      setCoverAnim(coverdown)
      setTimeout(() => setVisible("hidden"), 500)
      setModal(false)
    }
  }
  return (
    <Styled>
      <Modal visible={modal} />
      <Coverup cover={cover} coverAnim={coverAnim} onClick={() => handleModal(false)} />
      <Status />
      <Image onClick={() => handleModal(true)} src={con} alt="" />
    </Styled>
  )
}
const coverUp = keyframes`
0%{
 opacity: 0;
}
100%{
  opacity: 1;
}
`
const coverdown = keyframes`
0%{
 opacity: 1;
}
100%{
  opacity: 0;
}
`
const Coverup = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  background: #f5f5f5a3;
  visibility: ${props => props.cover};
  animation: ${props => props.coverAnim} 750ms forwards;
  z-index: 2;
`

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
    /* right: 90px; */
  }
`

export default Connect
