import React from "react"
import blade from "../assets/topcarousel/blade.gif"
import slide1 from "../assets/slide.png"
import { FaGithub, FaGlobe } from "react-icons/fa"

import styled, { keyframes } from "styled-components"
const VideoCards = () => {
  return (
    <Stlyed>
      <div className="card">
        <img className="video" src={blade} alt="one" />
        <div className="slide">
          <h1 className="title">Blade and Soul</h1>
          <p className="content">Action packed anime series</p>
          <div className="links">
            <a className="git" href="/">
              <FaGithub />
            </a>
            <a className="web" href="/">
              <FaGlobe />
            </a>
          </div>
        </div>
      </div>
    </Stlyed>
  )
}
const slide = keyframes`
from {
    margin-left: 500px;
  }
  to {
    margin-left: 0px;
  }
  
`

const Stlyed = styled.div`
  a {
    color: white;
    text-decoration: none;
    font-size: 30px;
  }
  margin-left: 160px;
  .card {
    overflow: hidden;
    width: 500px;
    border-radius: 5px;
  }
  .slide {
    color: White;
    text-shadow: 2px 2px red;
    margin: 0;
    background-image: url(${slide1});
    background-size: 500px 280px;
    border-radius: 5px;
    width: 500px;
    position: relative;
    animation: ${slide} 4s infinite;
    height: 280px;
  }
  .video {
    position: absolute;
    width: 500px;
    border-radius: 5px;
  }
  .links {
    position: absolute;
    bottom: 10px;
    right: 160px;
  }
  .web {
    margin-left: 20px;
  }
`

export default VideoCards
