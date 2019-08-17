import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import Loading from '../Loading'
import Slide from '../components/Slide'
const VideoCards = ({ url, title, content, git, web }) => {
	const [ state, setstate ] = useState('')
	const handleSlide = (value) => {
		setstate(value)
	}

	return (
		<Stlyed>
			<Video
				className='card'
				url={url}
				onMouseEnter={() => handleSlide('slidein')}
				onMouseLeave={() => handleSlide('slideout')}>
				<Loading />
				<div className={state + ' slide'}>
					<Slide git={git} web={web} title={title} content={content} />
				</div>
			</Video>
		</Stlyed>
	)
}
const slidein = keyframes` 100% { transform: translateX(0%); }
`
const slideout = keyframes`
0% { transform: translateX(0%);
100% { transform: translateX(200%); };
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
const Stlyed = styled.div`
	.center {
		position: absolute;
		margin: 90px 194px;
	}
	.card {
		margin-right: 0;
		overflow: hidden;
		border-radius: 5px;
		box-shadow: 3px 5px #555;
	}
	.slide {
		transform: translateX(100%);
		height: 100%;
	}
	.slidein {
		animation: ${slidein} 1s forwards linear;
	}
	.slideout {
		animation: ${slideout} 1s forwards linear;
	}

	@media only screen and (max-width: 600px) {
		.links {
			bottom: 5px;
			right: 180px;
		}
		.center {
			margin: 64px 133px;
		}
	}
`

export default VideoCards
