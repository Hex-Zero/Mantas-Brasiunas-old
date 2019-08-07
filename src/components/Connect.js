import React from "react"
import con from "../assets/connect.png"
import styled from "styled-components"
const Connect = () => {
  return (
    <Styled>
      <Status />
      <Image src={con} alt="" />
    </Styled>
  )
}
const Image = styled.img`
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
