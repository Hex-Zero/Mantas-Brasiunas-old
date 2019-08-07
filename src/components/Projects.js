import React from "react"
import styled from "styled-components"
import VideoCards from "./VideoCards"
import angelOne from "../assets/topcarousel/angelOne.jpg"
import angelTwo from "../assets/topcarousel/angelTwo.jpg"
import blade from "../assets/topcarousel/blade.gif"

const Projects = () => {
  return (
    <Styled>
      <h1>My Projects</h1>
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
    </Styled>
  )
}
const Styled = styled.div`
  margin-left: 20%;
  margin-right: 20%;

  .card {
    margin-top: 1vw;
    width: 500px;
    height: 250px;
  }

  @media only screen and (max-width: 600px) {
    .card {
      width: 300px;
      height: 170px;
    }
  }
`

export default Projects
