import React from "react"
import styled from "styled-components"
import VideoCards from "./VideoCards"
import angelOne from "../assets/topcarousel/angelOne.jpg"
import angelTwo from "../assets/topcarousel/angelTwo.jpg"
import blade from "../assets/topcarousel/blade.gif"

const Projects = () => {
  return (
    <Styled>
      <Title>My Projects</Title>
      <div className="fbox">
        <VideoCards
          url={angelOne}
          title={"Fancy angel"}
          content={"Red heared angel with Yellow wings"}
        />
        <VideoCards
          url={angelTwo}
          title={"Fancy angel"}
          content={"Red heared angel with Yellow wings"}
        />
        <VideoCards url={blade} title={"Blade and Soul"} content={"Action packed anime series"} />
      </div>
    </Styled>
  )
}

const Title = styled.h1`
  margin-left: 20%;
  color: #4ec3c9;
  text-shadow: 1px 1px white;
`

const Styled = styled.div`
  margin-left: 4%;
  margin-right: 4%;
  .fbox {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
  }
  .card {
    margin-top: 3vw;
    margin-left: 2vw;
    width: 450px;
    height: 250px;
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
