import React, { useState, useEffect, useContext } from "react"
import styled, { keyframes } from "styled-components"
import { ModalContext } from "./ModalContext"
const Modal = () => {
  const [visible, setVisible] = useContext(ModalContext)
  const [coverAnim, setCoverAnim] = useState()
  const [cover, setCover] = useState()
  useEffect(() => {
    if (visible) {
      setCover(true)
      setCoverAnim(coverUp)
    } else {
      setCoverAnim(coverdown)
      setTimeout(() => setCover(false), 750)
    }
  }, [visible])
  return (
    <Styled>
      <Coverup cover={cover} coverAnim={coverAnim} onClick={() => setVisible(false)} />
      <StyledModal visible={visible}>
        <p>
          Online <button onClick={() => setVisible(false)}>x</button>
        </p>
        <hr />
        <p>Contact</p>
      </StyledModal>
    </Styled>
  )
}

const ModalIn = keyframes`
0%{margin-top: -400px}
100%{margin-top: 0px}
`
const coverUp = keyframes`
0%{opacity: 0;}
100%{opacity: 1;}
`
const coverdown = keyframes`
0%{opacity: 1;}
100%{opacity: 0;}
`
const Coverup = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  background: #f5f5f5a3;
  visibility: ${props => (props.cover ? "visible" : "hidden")};
  animation: ${props => props.coverAnim} 750ms forwards;
  z-index: 2;
`

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
  border: solid 3px #f86e00;
  border-radius: 4px;
  animation: ${props => (props.visible ? ModalIn : false)} 750ms linear;
  z-index: 3;
  @media only screen and (max-width: 600px) {
    width: 400px;
  }
`

const Styled = styled.div``

export default Modal
