import React, { useState } from "react"
import con from "../assets/connect.png"
import styled, { keyframes } from "styled-components"
const Connect = () => {
  const [cover, setVisible] = useState("hidden")
  const [coverAnim, setCoverAnim] = useState()
  const handleModal = value => {
    if (value) {
      setVisible("visible")
      setCoverAnim(coverUp)
    } else {
      setCoverAnim(coverdown)
      setTimeout(() => setVisible("hidden"), 500)
    }
  }
  return (
    <Styled>
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
  left: 0;
  top: 0;
  background: #f5f5f5aa;
  visibility: ${props => props.cover};
  animation: ${props => props.coverAnim} 0.5s forwards;
  z-index: 2;
`

const Image = styled.img`
  cursor: pointer;
  width: 100px;
  position: absolute;
  z-index: 1;
`
const Status = styled.div`
  border-radius: 100%;
  width: 27px;
  height: 27px;
  background: radial-gradient(
    ellipse at center,
    rgba(255, 255, 0, 1) 0%,
    rgba(74, 206, 1, 1) 67%,
    rgba(74, 206, 1, 1) 100%
  );
  position: absolute;
  z-index: 0;
  top: 67px;
  left: 14px;
`

const Styled = styled.div`
  position: fixed;
  top: 0;
  right: 120px;

  @media only screen and (max-width: 600px) {
    right: 90px;
  }
`

export default Connect
