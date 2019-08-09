import React from "react"
import { FaPhone, FaAt } from "react-icons/fa"
import styled, { keyframes } from "styled-components"

const Contact = () => {
  return (
    <>
      <A>Email: Hex0@live.com</A>
      <A>
        Phone: 07933640414 <FaPhone />
      </A>
    </>
  )
}
const A = styled.a`
  display: block;
  position: relative;
  margin: 3px 10px;
  color: white;
  background: #f86e00;
  border: solid 3px #f86e00;
  padding: 6px 10px;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background: black;
  }
`
export default Contact
