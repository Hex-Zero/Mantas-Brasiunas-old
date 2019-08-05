import React, { useState, useEffect } from "react"
import Container from "react-bootstrap/Container"
import styled, { keyframes } from "styled-components"
import uuid from "uuid"

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

  const [y, setY] = useState(100)
  const [x, setX] = useState(250)
  const [z, setZ] = useState(250)

  const makeid = () => {
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    var charactersLength = characters.length

    return characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  useEffect(() => {
    setInterval(() => setRandom(makeid()), 250)
    setInterval(() => setRandom1(makeid()), 200)
    setInterval(() => setRandom2(makeid()), 230)
    setInterval(() => setRandom3(makeid()), 300)
    setInterval(() => setRandom4(makeid()), 270)
    setInterval(() => setRandom5(makeid()), 300)
    setInterval(() => setRandom6(makeid()), 250)
    setInterval(() => setRandom7(makeid()), 200)
    setInterval(() => (Math.random() < 0.5 ? setX(-20) : setX(+20)), 450)
    setInterval(() => setY(Math.floor(Math.random() * 150)), 500)
    setInterval(() => setZ(Math.floor(Math.random() * 150)), 600)
  }, [])

  return (
    <Styled>
      <Container>
        <div style={{ marginLeft: x }} id="move">
          {randomArray.map(random => {
            return (
              <div key={uuid()} className="box">
                <h1>{random}</h1>
                <br />
              </div>
            )
          })}
        </div>
        <div style={{ marginLeft: y }} id="movef">
          {randomArray.map(random => {
            return (
              <div key={uuid()} className="box">
                <h1>{random}</h1>
                <br />
              </div>
            )
          })}
        </div>
        <div style={{ marginLeft: z }} id="moves">
          {randomArray.map(random => {
            return (
              <div key={uuid()} className="box">
                <h1>{random}</h1>
                <br />
              </div>
            )
          })}
        </div>
      </Container>
    </Styled>
  )
}
const down = keyframes`
  from {
    margin-top: 20;
    opacity: 0.8;
  }
  to {
    margin-top: 600px;
    opacity: 0;
  }
`
const Styled = styled.div`
  .box {
    background-image: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.2) 0%,
      rgba(74, 142, 234, 0.2) 51%,
      rgba(206, 227, 255, 0.2) 100%
    );
    margin-left: 50px;
    text-align: center;
    width: 20px;
    height: 20px;
    border: 1px solid #8080805c;
    border-radius: 2px;
  }
  .container {
    display: flexbox;
    height: 800px;
    background-color: white;
  }
  h1 {
    font-size: 15px;
    color: white;
    text-shadow: 2px 2px #fc000041;
  }
  #move {
    position: absolute;
    animation: ${down} 5s infinite;
  }
  #moves {
    position: absolute;
    animation: ${down} 6s infinite;
  }
  #movef {
    position: absolute;
    animation: ${down} 4s infinite;
  }
`

export default Background
