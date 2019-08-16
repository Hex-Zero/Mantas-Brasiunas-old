import React, { useState } from 'react'
import slide1 from '../assets/slide.png'
import { FaGithub, FaGlobe } from 'react-icons/fa'
import styled, { keyframes } from 'styled-components'
import Loading from '../assets/Loading'
const VideoCards = ({ url, title, content, git, web }) => {
	const [ state, setstate ] = useState()

	const handleSlideOut = () => {
		setstate(slideout)
	}
	const handleSlideIn = () => {
		setstate(slidein)
	}
	return (
		<Stlyed>
			<Video className='card' url={url} onMouseEnter={handleSlideIn} onClick={handleSlideIn}>
				<Loading />
				<Slide
					onMouseLeave={handleSlideOut}
					onClick={handleSlideOut}
					animation={state}
					className='slide'>
					<h1 className='title'>{title}</h1>
					<p className='content'>{content}</p>
					<div className='links'>
						<a className='web ' href={web} target='__blank'>
							<FaGlobe />
							<P>Web</P>
						</a>
						<a className='git' href={git} target='__blank'>
							<FaGithub />
							<P>Git</P>
						</a>
					</div>
				</Slide>
			</Video>
		</Stlyed>
	)
}
const slidein = keyframes`
  0%{margin-left: 100%;}
  100% { margin-left: 0;}
`
const slideout = keyframes`
  0%{margin-left: 0;}
  100% {margin-left: 100%;}
`
const glow = keyframes`
 0%{text-shadow: 0 0 2px #ff7c00, 0 0 4px #ff7c00;}
  100%{text-shadow: 0 0 4px #ff7c00, 0 0 6px #e21102;}
`
const Slide = styled.div`
	color: white;
	margin-left: 100%;
	background-image: url(${slide1});
	background-size: 100%;
	width: 100%;
	height: 100%;
	position: relative;
	animation: ${(props) => props.animation} 1.5s ease forwards;
	.title {
		margin-left: 10px;
		animation: ${glow} 1s ease-in-out infinite alternate;
	}
	.content {
		margin-left: 10px;
		font-size: 18px;
		font-weight: 600;
		animation: ${glow} 1s ease-in-out infinite alternate;
	}
`
const Video = styled.div`
	width: 100%;
	height: 100%;
	border-radius: 5px;
	background-image: url(${(props) => props.url});
	background-repeat: no-repeat;
	background-size: 100% 100%;
	z-index: 1;
`
const P = styled.p`font-size: 12px;`

const Stlyed = styled.div`
	a {
		-webkit-tap-highlight-color: transparent;
		display: flex;
		margin-left: 5px;
		color: white;
		text-decoration: none;
		font-size: 27px;
		&:hover {
			color: #fdefef;
		}
	}
	.card {
		margin-right: 0;
		overflow: hidden;
		border-radius: 5px;
		box-shadow: 3px 5px #555;
	}
	video {
		z-index: 1;
	}
	.links {
		display: flex;
		position: absolute;
		bottom: 10px;
		right: 240px;
	}
	.web {
		margin-left: 20px;
	}

	@media only screen and (max-width: 600px) {
		.links {
			bottom: 5px;
			right: 180px;
		}
	}
`

export default VideoCards
