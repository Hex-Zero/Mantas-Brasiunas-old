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

  const [y, setY] = useState(40)
  const [x, setX] = useState(46)
  const [z, setZ] = useState(55)

  const makeid = () => {
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
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
    setInterval(() => (Math.random() < 0.5 ? setX(-8) : setX(+8)), 720)
    setInterval(() => setY(Math.floor(Math.random() * 75)), 700)
    setInterval(() => setZ(Math.floor(Math.random() * 77)), 750)
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
        <img src={reach} alt="" />
      </Container>
    </Styled>
  )
}
const down = keyframes`
  from {
    margin-top: 0em;
    opacity: 0.8;
  }
  to {
    margin-top: 26em;
    opacity: 0.1;
  }
  
}
`
const Styled = styled.div`
  img {
    bottom: 0;
    left: 3%;
    position: absolute;
    height: 40%;
  }
  .box {
    background-image: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(74, 142, 234, 0.1) 51%,
      rgba(206, 227, 255, 0.1) 100%
    );
    margin-left: 4.5rem;
    text-align: center;
    width: 20px;
    height: 20px;
    border-radius: 2px;
  }
  .container {
    display: flexbox;

    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: whitesmoke;

    z-index: -10;
  }
  h1 {
    font-size: 15px;
    color: white;
    text-shadow: 2px 2px #8080805c;
  }
  #move {
    position: absolute;
    animation: ${down} 5.5s infinite;
  }
  #moves {
    position: absolute;
    animation: ${down} 6s infinite;
  }
  #movef {
    position: absolute;
    animation: ${down} 6.5s infinite;
  }
  @media only screen and (max-width: 767px) {
    .box {
      margin-left: 0;
    }
  }
`

export default Background
