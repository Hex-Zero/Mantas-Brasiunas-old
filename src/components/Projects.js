import React from "react"
import styled from "styled-components"
import VideoCards from "./VideoCards"
import vita from "../assets/vita.gif"
import ravenouse from "../assets/ravenouse.jpg"
import budget from "../assets/budget.jpg"
import first from "../assets/first.gif"
import About from "../assets/About"

const Projects = () => {
  return (
    <Styled>
      <Title>My Projects</Title>
      <div className="fbox">
        <VideoCards
          url={vita}
          title={"Vita Smile Photograpy"}
          content={"Red heared angel with Yellow wings"}
          git="https://github.com/Hex-Zero/VitaSmilePhotography"
          web="https://vita-smile-photography.uk/"
        />
        <VideoCards
          url={ravenouse}
          title={"Ravenouse"}
          content={"Red heared angel with Yellow wings"}
          git=""
          web=""
        />
        <VideoCards
          url={budget}
          title={"Budget Calculator"}
          content={"Action packed anime series"}
          git=""
          web=""
        />
        <VideoCards
          url={first}
          title={"My First Website"}
          content={"Action packed anime series"}
          git=""
          web=""
        />
        <About />
      </div>
    </Styled>
  )
}

const Title = styled.h1`
  left: 0;
  right: 0;
  margin: 0 auto;
  margin-top: 10px;
  text-align: center;
  width: 190px;
  border: solid 4px #f86e00;
  border-radius: 4px;
  padding: 5px 10px 7px 10px;
  color: #f86e00;
  text-shadow: 1px 1px gray;
  box-shadow: 2px 2px #555;
  &:hover {
    background-color: whitesmoke;
  }
`

const Styled = styled.div`
  margin-left: 4%;
  margin-right: 4%;
  .About {
    margin: 0 1%;
    margin-top: 40px;
    text-align: center;
    width: 720px;
    border: solid 4px #f86e00;
    border-radius: 4px;
    padding: 5px 10px;
    color: #f86e00;

    box-shadow: 2px 2px #555;
    font-size: 14px;
  }

  .fbox {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
  }
  .card {
    margin-top: 2vw;
    margin-left: 2vw;
    width: 450px;
    height: 250px;
    border: solid 2px gray;
    border-radius: 6px;
    &:hover {
      border: solid 2px #ff6a00;
    }
  }
  @media only screen and (max-width: 600px) {
    margin-left: 15%;
    margin-right: 15%;
    .card {
      width: 350px;
      height: 190px;
    }
  }
`

export default Projects
