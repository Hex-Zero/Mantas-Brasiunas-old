import React, { useState } from 'react'
import { FaPhone, FaLinkedin, FaFacebookSquare, FaTwitter, FaInstagram } from 'react-icons/fa'
import styled from 'styled-components'
import uuid from 'uuid'

const Contact = () => {
	const [ instaHover, setInstaHover ] = useState()
	const [ Icons ] = useState([
		<FaFacebookSquare />,
		<FaInstagram />,
		<FaTwitter />,
		<FaLinkedin />
	])
	const [ Id ] = useState([ 'Facebook', 'Instagram', 'Twitter', 'Linkedin', 'YouTube' ])
	const [ Links ] = useState([
		'https://www.facebook.com/HexZer0',
		'https://www.facebook.com/HexZer0',
		'https://www.facebook.com/HexZer0',
		'https://www.facebook.com/HexZer0',
		'https://www.facebook.com/HexZer0'
	])

	return (
		<div>
			<Title>Contact</Title>
			<A>Email: Hex0@live.com</A>
			<A>
				Phone: 07933640414 <FaPhone />
			</A>
			<Title>Social Media</Title>
			<Social>
				{Icons.map((icon, index) => (
					<SocialLinks
						id={Id[index]}
						key={uuid()}
						href={Links[index]}
						target='__blank'
						rel='noopener noreferrer'>
						{icon}
					</SocialLinks>
				))}
			</Social>
			<svg width='0' height='0'>
				<radialGradient id='rg' r='150%' cx='30%' cy='107%'>
					<stop stop-color='#fdf497' offset='0' />
					<stop stop-color='#fdf497' offset='0.05' />
					<stop stop-color='#fd5949' offset='0.45' />
					<stop stop-color='#d6249f' offset='0.6' />
					<stop stop-color='#285AEB' offset='0.9' />
				</radialGradient>
			</svg>
			<svg width='0' height='0'>
				<radialGradient id='rgi' r='150%' cx='30%' cy='107%'>
					<stop stop-color='#e1d989' offset='0' />
					<stop stop-color='#e1d989' offset='0.05' />
					<stop stop-color='#ce483b' offset='0.45' />
					<stop stop-color='#c42192' offset='0.6' />
					<stop stop-color='#214dce' offset='0.9' />
				</radialGradient>
			</svg>
		</div>
	)
}
const A = styled.a`
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
		background: black;
	}
`
const Title = styled.h3``

const SocialLinks = styled.a`
	font-size: 36px;
	position: relative;
`
const Social = styled.div`
	display: inline;
	#Facebook {
		color: #3b569c;
		&:hover {
			color: #2d4175;
		}
	}
	#Instagram svg * {
		fill: url(#rg);
	}
	#Instagram:hover svg * {
		fill: url(#rgi);
	}
	#Twitter {
		color: #1ea1f2;
		&:hover {
			color: #1575b1;
		}
	}
	#Linkedin {
		color: #0077b5;
		&:hover {
			color: #035a88;
		}
	}
	#YouTube {
		color: #0077b5;
		&:hover {
			color: #035a88;
		}
	}
`
export default Contact
