import React, { useState, useEffect } from "react"
import blade from "../assets/topcarousel/blade.gif"
import slide1 from "../assets/slide.png"
import { FaGithub, FaGlobe } from "react-icons/fa"
import styled, { keyframes } from "styled-components"

const VideoCards = () => {
  const [state, setstate] = useState()

  useEffect(() => {}, [])

  const handleSlideOut = () => {
    setstate(slideout)
  }
  const handleSlideIn = () => {
    setstate(slidein)
  }
  return (
    <Stlyed>
      <div className="card">
        <img onMouseEnter={handleSlideIn} className="video" src={blade} alt="one" />
        <Slide onMouseLeave={handleSlideOut} animation={state} className="slide">
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
        </Slide>
      </div>
    </Stlyed>
  )
}
const slidein = keyframes`
  0%{
    margin-left: 500px;
  }
  100% {
    margin-left: 0px;
  }
  
`
const slideout = keyframes`
  0%{
    margin-left: 0px;
  }
  100% {
    margin-left: 500px;
  }
  
`
const Slide = styled.div`
  color: White;
  margin-left: 500px;
  text-shadow: 2px 2px red;
  background-image: url(${slide1});
  background-size: 500px 280px;
  border-radius: 5px;
  width: 500px;
  position: relative;
  height: 280px;
  animation: ${props => props.animation} 2s ease forwards;
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
