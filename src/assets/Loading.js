import React from 'react'
import styled, { keyframes } from 'styled-components'
const Loading = () => {
	return (
		<Styled>
			<div class='layer-1'>
				<div class='layer-2'>
					<div class='layer-3' />
				</div>
			</div>
		</Styled>
	)
}

export default Loading

const rotate = keyframes`
    100%{transform:rotate(360deg)}
`

const Styled = styled.div`
	margin-top: 75px;
	position: absolute;
	animation: ${rotate} 1s linear infinite;
	z-index: -2;
	display: flex;
	width: 34%;

	justify-content: center;
	div {
		border-radius: 100%;
		width: 100%;
		height: 100%;
	}
	.layer-1 {
		width: 100px;
		height: 100px;
	}
	.layer-1 {
		background: -moz-linear-gradient(0deg, rgba(255, 165, 0, 1) 0%, rgba(255, 165, 0, 1) 100%);
		background: -webkit-linear-gradient(
			0deg,
			rgba(255, 165, 0, 1) 0%,
			rgba(255, 165, 0, 1) 100%
		);
		background: -o-linear-gradient(0deg, rgba(255, 165, 0, 1) 0%, rgba(255, 165, 0, 1) 100%);
		background: -ms-linear-gradient(0deg, rgba(255, 165, 0, 1) 0%, rgba(255, 165, 0, 1) 100%);
		background: linear-gradient(90deg, rgba(255, 165, 0, 1) 0%, rgba(255, 165, 0, 1) 100%);
	}
	.layer-2 {
		background: -moz-linear-gradient(
			90deg,
			rgba(255, 255, 255, 0) 0%,
			rgba(255, 255, 255, 0) 49%,
			rgba(255, 255, 255, 1) 50%,
			rgba(255, 255, 255, 1) 100%
		);
		background: -webkit-linear-gradient(
			90deg,
			rgba(255, 255, 255, 0) 0%,
			rgba(255, 255, 255, 0) 49%,
			rgba(255, 255, 255, 1) 50%,
			rgba(255, 255, 255, 1) 100%
		);
		background: -o-linear-gradient(
			90deg,
			rgba(255, 255, 255, 0) 0%,
			rgba(255, 255, 255, 0) 49%,
			rgba(255, 255, 255, 1) 50%,
			rgba(255, 255, 255, 1) 100%
		);
		background: -ms-linear-gradient(
			90deg,
			rgba(255, 255, 255, 0) 0%,
			rgba(255, 255, 255, 0) 49%,
			rgba(255, 255, 255, 1) 50%,
			rgba(255, 255, 255, 1) 100%
		);
		background: linear-gradient(
			0deg,
			rgba(255, 255, 255, 0) 0%,
			rgba(255, 255, 255, 0) 49%,
			rgba(255, 255, 255, 1) 50%,
			rgba(255, 255, 255, 1) 100%
		);
	}
	.layer-3 {
		background: -moz-linear-gradient(
			135deg,
			rgba(255, 165, 0, 0) 0%,
			rgba(255, 165, 0, 0) 50%,
			rgba(255, 165, 0, 1) 51%,
			rgba(255, 165, 0, 1) 51%,
			rgba(255, 165, 0, 1) 100%
		);
		background: -webkit-linear-gradient(
			135deg,
			rgba(255, 165, 0, 0) 0%,
			rgba(255, 165, 0, 0) 50%,
			rgba(255, 165, 0, 1) 51%,
			rgba(255, 165, 0, 1) 51%,
			rgba(255, 165, 0, 1) 100%
		);
		background: -o-linear-gradient(
			135deg,
			rgba(255, 165, 0, 0) 0%,
			rgba(255, 165, 0, 0) 50%,
			rgba(255, 165, 0, 1) 51%,
			rgba(255, 165, 0, 1) 51%,
			rgba(255, 165, 0, 1) 100%
		);
		background: -ms-linear-gradient(
			135deg,
			rgba(255, 165, 0, 0) 0%,
			rgba(255, 165, 0, 0) 50%,
			rgba(255, 165, 0, 1) 51%,
			rgba(255, 165, 0, 1) 51%,
			rgba(255, 165, 0, 1) 100%
		);
		background: linear-gradient(
			315deg,
			rgba(255, 165, 0, 0) 0%,
			rgba(255, 165, 0, 0) 50%,
			rgba(255, 165, 0, 1) 51%,
			rgba(255, 165, 0, 1) 51%,
			rgba(255, 165, 0, 1) 100%
		);
	}
`
