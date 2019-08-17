import React from 'react'
import styled, { keyframes } from 'styled-components'
const Loading = () => {
	return (
		<Styled className='loading'>
			<Back />
			<Rotating>
				<div className='layer-1'>
					<div className='layer-2'>
						<div className='layer-3' />
					</div>
				</div>
			</Rotating>
		</Styled>
	)
}

export default Loading

const rotate = keyframes`
  100%{transform:rotate(360deg)}
`
const glow = keyframes`
 0%{box-shadow: 0 0 6px #ff7c00, 0 0 10px #ff7c00;}
  100%{box-shadow: 0 0 10px #ff7c00, 0 0 16px #e21102;}
`
const Styled = styled.div`
	position: absolute;
	display: flex;
	width: 450px;
	height: 250px;
	justify-content: center;
	align-items: center;
	@media only screen and (max-width: 600px) {
		width: 350px;
		height: 190px;
	}
`
const Back = styled.div`
	position: absolute;
	z-index: -2;
	background: -moz-linear-gradient(45deg, rgba(255, 0, 223, 1) 0%, rgba(255, 255, 0, 1) 100%);
	background: -webkit-linear-gradient(45deg, rgba(255, 0, 223, 1) 0%, rgba(255, 255, 0, 1) 100%);
	background: -o-linear-gradient(45deg, rgba(255, 0, 223, 1) 0%, rgba(255, 255, 0, 1) 100%);
	background: -ms-linear-gradient(45deg, rgba(255, 0, 223, 1) 0%, rgba(255, 255, 0, 1) 100%);
	background: linear-gradient(45deg, rgba(255, 0, 223, 1) 0%, rgba(255, 255, 0, 1) 100%);
	width: 68px;
	height: 68px;
	border-radius: 50%;
	animation: ${glow} 1s ease-in-out infinite alternate;
`

const Rotating = styled.div`
	position: absolute;
	z-index: -2;

	div {
		animation: ${rotate} 1s linear infinite;
		width: 100%;
		height: 100%;
		border-radius: 100%;
	}
	.layer-1 {
		width: 60px;
		height: 60px;
	}
	.layer-1 {
		background: -moz-linear-gradient(0deg, rgba(255, 72, 0, 1) 0%, rgba(255, 124, 0, 1) 100%);
		background: -webkit-linear-gradient(
			0deg,
			rgba(255, 72, 0, 1) 0%,
			rgba(255, 124, 0, 1) 100%
		);
		background: -o-linear-gradient(0deg, rgba(255, 72, 0, 1) 0%, rgba(255, 124, 0, 1) 100%);
		background: -ms-linear-gradient(0deg, rgba(255, 72, 0, 1) 0%, rgba(255, 124, 0, 1) 100%);
		background: linear-gradient(90deg, rgba(255, 72, 0, 1) 0%, rgba(255, 124, 0, 1) 100%);
	}
	.layer-2 {
		background: -moz-linear-gradient(
			135deg,
			rgba(255, 255, 255, 0) 0%,
			rgba(255, 255, 255, 0) 32%,
			rgba(255, 255, 255, 1) 57%,
			rgba(255, 255, 255, 1) 100%
		);
		background: -webkit-linear-gradient(
			135deg,
			rgba(255, 255, 255, 0) 0%,
			rgba(255, 255, 255, 0) 32%,
			rgba(255, 255, 255, 1) 57%,
			rgba(255, 255, 255, 1) 100%
		);
		background: -o-linear-gradient(
			135deg,
			rgba(255, 255, 255, 0) 0%,
			rgba(255, 255, 255, 0) 32%,
			rgba(255, 255, 255, 1) 57%,
			rgba(255, 255, 255, 1) 100%
		);
		background: -ms-linear-gradient(
			135deg,
			rgba(255, 255, 255, 0) 0%,
			rgba(255, 255, 255, 0) 32%,
			rgba(255, 255, 255, 1) 57%,
			rgba(255, 255, 255, 1) 100%
		);
		background: linear-gradient(
			315deg,
			rgba(255, 255, 255, 0) 0%,
			rgba(255, 255, 255, 0) 32%,
			rgba(255, 255, 255, 1) 57%,
			rgba(255, 255, 255, 1) 100%
		);
	}
	.layer-3 {
		background: -moz-linear-gradient(
			135deg,
			rgba(255, 85, 0, 0) 0%,
			rgba(255, 103, 0, 0) 47%,
			rgba(255, 110, 0, 1) 65%,
			rgba(255, 115, 0, 1) 79%,
			rgba(255, 124, 0, 1) 100%
		);
		background: -webkit-linear-gradient(
			135deg,
			rgba(255, 85, 0, 0) 0%,
			rgba(255, 103, 0, 0) 47%,
			rgba(255, 110, 0, 1) 65%,
			rgba(255, 115, 0, 1) 79%,
			rgba(255, 124, 0, 1) 100%
		);
		background: -o-linear-gradient(
			135deg,
			rgba(255, 85, 0, 0) 0%,
			rgba(255, 103, 0, 0) 47%,
			rgba(255, 110, 0, 1) 65%,
			rgba(255, 115, 0, 1) 79%,
			rgba(255, 124, 0, 1) 100%
		);
		background: -ms-linear-gradient(
			135deg,
			rgba(255, 85, 0, 0) 0%,
			rgba(255, 103, 0, 0) 47%,
			rgba(255, 110, 0, 1) 65%,
			rgba(255, 115, 0, 1) 79%,
			rgba(255, 124, 0, 1) 100%
		);
		background: linear-gradient(
			315deg,
			rgba(255, 85, 0, 0) 0%,
			rgba(255, 103, 0, 0) 47%,
			rgba(255, 110, 0, 1) 65%,
			rgba(255, 115, 0, 1) 79%,
			rgba(255, 124, 0, 1) 100%
		);
	}
`
