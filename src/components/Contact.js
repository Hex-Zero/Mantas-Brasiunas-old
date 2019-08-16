import React, { useState } from 'react'
import { FaPhone, FaCopy, FaMailBulk } from 'react-icons/fa'
import styled, { keyframes } from 'styled-components'

import SocialMedia from './SocialMedia'

const Contact = () => {
	const [ alertShow, setAlertShow ] = useState()
	const handleCopy = (x) => {
		var copyText = document.getElementById(x)
		copyText.select()
		document.execCommand('copy')
		setAlertShow(x)
		setTimeout(() => {
			setAlertShow(false)
		}, 2200)
	}
	return (
		<div>
			<Alert alertShow={alertShow}>{alertShow} copied</Alert>
			<Title>Contact</Title>
			<A onClick={() => handleCopy('Name')}>
				Name: <Info type='text' value='Mantas Brasiunas' id='Name' readOnly />
				<span className='icons'>
					<Copy>
						<FaCopy onClick={() => handleCopy('Name')} />
					</Copy>
				</span>
			</A>
			<A onClick={() => handleCopy('Email')}>
				Email: <Info type='text' value='Hex0@live.com' id='Email' readOnly />
				<span className='icons'>
					<Coms href='mailto:Hex0@live.com'>
						<FaMailBulk />
					</Coms>
					<Copy>
						<FaCopy onClick={() => handleCopy('Email')} />
					</Copy>
				</span>
			</A>
			<A onClick={() => handleCopy('Phone')}>
				Phone: <Info type='text' value='07933640414' id='Phone' readOnly />
				<span className='icons'>
					<Coms href='tel:+447933640414'>
						<FaPhone />
					</Coms>
					<Copy>
						<FaCopy onClick={() => handleCopy('Phone')} />
					</Copy>
				</span>
			</A>
			<Title>Social Media</Title>
			<SocialMedia />
		</div>
	)
}
const fade = keyframes`
0%{opacity: 0}
40%{opacity: 1}
60%{opacity: 1}
100%{opacity: 0}
`
const Copy = styled.span`
	&:hover {
		position: absolute;
		color: #fbc31b;
		right: 1px;
		top: 1px;
	}
`
const Alert = styled.div`
	width: 150px;
	font-weight: 600;
	font-size: 20px;
	position: fixed;
	background-color: #f86e00;
	color: white;
	left: 0;
	right: 0;
	border: solid 3px white;
	text-align: center;
	margin-left: auto;
	margin-right: auto;
	border-radius: 5px;
	padding: 5px 10px;
	z-index: 4;
	opacity: 0;
	animation: ${(props) => (props.alertShow ? fade : false)} 2200ms forwards;
`
const Coms = styled.a`
	color: white;
	position: absolute;
	right: 20px;
	&:hover {
		right: 21px;
		top: 1px;
		color: #fbc31b;
	}
`

const A = styled.div`
	display: block;
	position: relative;
	margin: 3px 10px;
	color: white;
	background: #f86e00;
	border: solid 3px #f86e00;
	padding: 6px 10px;
	border-radius: 6px;
	cursor: pointer;
	&:hover {
		background: #b35306;
	}
	.cover {
		display: flex;
		font-weight: 600;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		align-items: center;
		border-radius: 2px;
		background-color: #f86e00;
		&:hover {
			background: #b35306;
		}
		p {
			margin-left: 7px;
		}
	}
	.icons {
		position: absolute;
		right: 5px;
		cursor: pointer;
		z-index: 3;
	}
`
const Info = styled.input`
	font-weight: 700;
	color: white;
	background: #00000000;
	border: none;
	&:focus {
		outline: none;
	}
`

const Title = styled.h3`margin-top: 6px;`

export default Contact
