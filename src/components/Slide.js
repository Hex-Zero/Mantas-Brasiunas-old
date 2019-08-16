import React from 'react'
import styled, { keyframes } from 'styled-components'
import { FaGithub, FaGlobe } from 'react-icons/fa'
const Slide = ({ git, web, content, title }) => {
	return (
		<Styled>
			<h1 className='title'>{title}</h1>
			<h2 className='content'>{content}</h2>
			<div className='bottom-Line'>
				<div className='tagWrapper'>
					<a className='web tags' href={web} target='__blank' alt='website link'>
						<FaGlobe />
					</a>
					<a className='git tags' href={git} target='__blank' alt='github link'>
						<FaGithub />
					</a>
				</div>
			</div>
		</Styled>
	)
}

const glow = keyframes`
 0%{text-shadow: 0 0 2px #ff7c00, 0 0 4px #ff7c00;}
  100%{text-shadow: 0 0 4px #ff7c00, 0 0 6px #e21102;}
`
const Styled = styled.div`
	border-radius: 5px;
	position: relative;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	/* transform: translateX(200%); */
	background: linear-gradient(
		120deg,
		rgba(255, 0, 223, 0.18) 0%,
		rgba(255, 124, 0, 0.18) 48%,
		rgba(255, 0, 223, 0.17) 100%
	);
	.bottom-Line {
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 20%;
		background: linear-gradient(
			120deg,
			rgba(255, 124, 0, 0) 0%,
			rgba(255, 119, 0, 0) 11.5%,
			rgba(255, 118, 0, 1) 12%,
			rgba(255, 72, 0, 1) 60%,
			rgba(255, 124, 0, 1) 100%
		);
	}
	.title,
	.content {
		margin-left: 10px;
		color: white;
		animation: ${glow} 1s ease-in-out infinite alternate;
	}
	.tagWrapper {
		display: flex;
		margin-left: 150px;
		margin-top: 10px;
	}
	.tags {
		display: flex;
		margin-left: 30px;
		color: white;
		text-decoration: none;
		font-size: 35px;
		&:hover {
			color: #fdefef;
		}
	}
	@media only screen and (max-width: 600px) {
		.tagWrapper {
			margin-left: 120px;
			margin-top: 5px;
		}
		.tags {
			font-size: 27px;
		}
	}
`
export default Slide
