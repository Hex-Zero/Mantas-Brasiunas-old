import React from 'react'
import styled, { keyframes } from 'styled-components'
import { ModalContext } from '../context/ModalContext'
import Modal from './Modal'
import Loading from '../Loading'
const Face = React.lazy(() => import('../assets/Face'))
const Burger = () => {
	const { setVisible } = React.useContext(ModalContext)
	return (
		<React.Fragment>
			<Modal />
			<Styled onClick={() => setVisible(true)}>
				<div className='imageCircul'>
					<React.Suspense fallback={<Loading />}>
						<Face />
					</React.Suspense>
					<div className='statusCircul'>
						<div className='statusLight' />
					</div>
					<div className='burger'>
						<div className='burger-line' />
						<div className='burger-line' />
						<div className='burger-line' />
					</div>
				</div>
			</Styled>
		</React.Fragment>
	)
}
const glow = keyframes`
 0%{box-shadow: 0 0 6px #ff7c00, 0 0 10px #ff7c00;}
  100%{box-shadow: 0 0 10px #ff7c00, 0 0 16px #e21102;}
`
const Styled = styled.div`
	position: fixed;
	top: 8px;
	right: 2px;
	width: 100px;
	height: 100px;
	&:hover .burger,
	.burger-line {
		animation: ${glow} 1s ease-in-out infinite alternate;
	}
	.imageCircul {
		position: absolute;
		width: 98%;
		height: 98%;
		border-radius: 100%;
		border: solid 1px #780000;
		z-index: -3;
		background: linear-gradient(
			120deg,
			rgba(128, 0, 0, 1) 0%,
			rgba(255, 0, 0, 1) 50%,
			rgba(120, 15, 15, 1) 100%
		);
		animation: ${glow} 1s ease-in-out infinite alternate;
	}
	.img {
		position: absolute;
		margin: 4% 4%;
		width: 90%;
		height: 90%;
		border-radius: 100%;
		border: solid 1px #780000;
	}
	.statusCircul {
		position: absolute;
		bottom: -5%;
		left: 0;
		width: 33%;
		height: 33%;
		border-radius: 100%;
		border: solid 1px #780000;
		background: linear-gradient(
			120deg,
			rgba(128, 0, 0, 1) 0%,
			rgba(255, 0, 0, 1) 50%,
			rgba(120, 15, 15, 1) 100%
		);
	}
	.statusLight {
		margin: 2px 2px;
		border-radius: 100%;
		width: 82%;
		height: 82%;
		border: solid 1px #780000;
		background: radial-gradient(
			ellipse at center,
			rgba(255, 255, 0, 1) 0%,
			rgba(74, 206, 1, 1) 67%,
			rgba(74, 206, 1, 1) 100%
		);
	}
	.burger {
		position: absolute;
		bottom: -5%;
		right: 5%;
		width: 31%;
		height: 31%;
		border-radius: 13%;
		border: solid 1px #780000;
		background: linear-gradient(
			0deg,
			rgba(128, 0, 0, 1) 0%,
			rgba(255, 0, 0, 1) 50%,
			rgba(120, 15, 15, 1) 100%
		);
	}
	.burger-line {
		margin: 5px auto;
		width: 60%;
		border-radius: 8px;
		border: solid 2px #780000;
	}
	.Loading {
		position: absolute;
		margin: 15%;
		z-index: -2;
	}
`
export default Burger
