import React, { useState, useEffect } from "react"
import Container from "react-bootstrap/Container"
import styled, { keyframes } from "styled-components"
import uuid from "uuid"
import reach from "../assets/reach.png"

const Background = () => {
  const [random, setRandom] = useState()
  const [random1, setRandom1] = useState()
  const [random2, setRandom2] = useState()
  const [random3, setRandom3] = useState()
  const [random4, setRandom4] = useState()
  const [random5, setRandom5] = useState()
  const [random6, setRandom6] = useState()
  const [random7, setRandom7] = useState()
  const randomArray = [random, random1, random2, random3, random4, random5, random6, random7]

  const [start] = useState([7, 3, 10, 2])
  const [drops] = useState(["fallFast", "fallMed", "fallSlow", "fallFastest"])
  const makeid = () => {
    var characters = "ABCDEFGHIJKLMNPQRSTUVWXYZ0123456789"
    var charactersLength = characters.length
    return characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  useEffect(() => {
    setInterval(() => setRandom(makeid()), 500)
    setInterval(() => setRandom1(makeid()), 400)
    setInterval(() => setRandom2(makeid()), 460)
    setInterval(() => setRandom3(makeid()), 600)
    setInterval(() => setRandom4(makeid()), 540)
    setInterval(() => setRandom5(makeid()), 600)
    setInterval(() => setRandom6(makeid()), 500)
    setInterval(() => setRandom7(makeid()), 400)
  }, [])

  return (
    <Styled>
      <Container>
        {drops.map((drop, index) => (
          <Move key={drop} className={drop} start={start[index]}>
            {randomArray.map(random => {
              return (
                <div key={uuid()} className="box">
                  <h1 className="text">{random}</h1>
                  <br />
                </div>
              )
            })}
          </Move>
        ))}
        <img src={reach} alt="" />
      </Container>
    </Styled>
  )
}
const Move = styled.div`
  width: 25px;
  text-align: center;
  margin-left: ${props => props.start}vw;
`

const fallFastest = keyframes`
  0% {
    opacity: 0.6;
  }
  25%{
    opacity: 0.8;
    margin-left: 5vw;
  }
  50%{
    
    margin-left: 8vw;
  }
  75%{
    margin-left: 7.7vw;
  }
  100% {
    margin-left: 7.3vw;
    margin-top: 25vw;
    opacity: 0;
  }
}
`
const fallFast = keyframes`
  0% {
    opacity: 0.6;
  }
  25%{
    opacity: 0.8;
    margin-left: 3vw;
  }
  50%{
    
    margin-left: 5vw;
  }
  75%{
    margin-left: 4vw;
  }
  100% {
    margin-left: 4.3vw;
    margin-top: 25vw;
    opacity: 0;
  }
}
`

const fallMed = keyframes`
  0% {
    opacity: 0.6;
  }
  25%{
    opacity: 0.8;
    margin-left: 7vw;
  }
  50%{
    
    margin-left: 5vw;
  }
  75%{
    margin-left: 4vw;
  }
  100% {
    margin-left: 4.3vw;
    margin-top: 25vw;
    opacity: 0;
  }
}
`
const fallSlow = keyframes`
  0% {
    opacity: 0.6;
  }
  25%{
    opacity: 0.8;
    margin-left: 3vw;
  }
  50%{
    
    margin-left: 5vw;
  }
  75%{
    margin-left: 4vw;
  }
  100% {
    margin-left: 4.3vw;
    margin-top: 25vw;
    opacity: 0;
  }
}
`
const Styled = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: #f5f5f500;
  z-index: -10;

  img {
    bottom: 0;
    left: 1%;
    position: absolute;
    width: 9vw;
  }
  .text {
    font-size: 0.7vw;
  }

  .box {
    color: white;
    border-radius: 8px;
    width: 1vw;
    height: 1vw;
    background: radial-gradient(
      ellipse at center,
      rgba(3, 228, 255, 1) 0%,
      rgba(226, 238, 255, 1) 70%,
      rgba(228, 240, 255, 1) 100%
    );
  }
  .fallFastest {
    font-size: 0.4rem;
    left: 0;
    position: absolute;
    animation: ${fallFastest} 4s infinite;
  }
  .fallFast {
    font-size: 0.4rem;
    left: 0;
    position: absolute;
    animation: ${fallFast} 5s infinite;
  }
  .fallMed {
    font-size: 0.4rem;
    left: 0;
    position: absolute;
    animation: ${fallMed} 6s infinite;
  }
  .fallSlow {
    font-size: 0.4rem;
    left: 0;
    position: absolute;
    animation: ${fallSlow} 7s infinite;
  }
`

export default Background
