import React, { useState, useEffect, useContext } from 'react'
import styled, { keyframes } from 'styled-components'
import { ModalContext } from '../context/ModalContext'
import { FaTimes } from 'react-icons/fa'
import Contact from './Contact'
const Modal = () => {
	const [ visible, setVisible ] = useContext(ModalContext)
	const [ coverAnim, setCoverAnim ] = useState()
	const [ cover, setCover ] = useState()
	useEffect(
		() => {
			if (visible) {
				setCover(true)
				setCoverAnim(coverUp)
			} else {
				setCoverAnim(coverdown)
				setTimeout(() => setCover(false), 450)
			}
		},
		[ visible ]
	)
	return (
		<Styled>
			<Coverup cover={cover} coverAnim={coverAnim} onClick={() => setVisible(false)} />
			<StyledModal visible={visible}>
				<p>
					<FaTimes className='close' onClick={() => setVisible(false)} />
				</p>
				<br />

				<Contact />
			</StyledModal>
		</Styled>
	)
}
const ModalIn = keyframes`
0%{margin-top: -400px}
100%{margin-top: 0px}
`
const coverUp = keyframes`
0%{opacity: 0;}
100%{opacity: 1;}
`
const coverdown = keyframes`
0%{opacity: 1;}
100%{opacity: 0;}
`
const Coverup = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	background: #f5f5f5a3;
	visibility: ${(props) => (props.cover ? 'visible' : 'hidden')};
	animation: ${(props) => props.coverAnim} 750ms forwards;
	z-index: 2;
`

const StyledModal = styled.div`
	visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
	top: 100px;
	position: fixed;
	width: 300px;
	height: 270px;
	left: 0;
	right: 0;
	margin-left: auto;
	margin-right: auto;
	background: white;
	text-align: center;
	border: solid 3px #f86e00;
	border-radius: 4px;
	animation: ${(props) => (props.visible ? ModalIn : false)} 750ms linear;
	z-index: 3;
	@media only screen and (max-width: 600px) {
		width: 300px;
	}
`
const Styled = styled.div`
	.close {
		position: absolute;
		right: 3px;
		top: 3px;
		color: #f86e00;
		border: solid 2px #f86e00;
		padding: 2px;
		border-radius: 100%;
		cursor: pointer;
		-webkit-tap-highlight-color: transparent;
		-webkit-touch-callout: none;
		-webkit-user-select: none;
		-khtml-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		&:hover {
			color: gray;
			border: solid 2px gray;
		}
	}
`
export default Modal
