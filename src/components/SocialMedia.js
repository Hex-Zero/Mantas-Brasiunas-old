import React, { useState } from 'react'
import {
	FaLinkedin,
	FaFacebookSquare,
	FaTwitter,
	FaInstagram,
	FaYoutubeSquare
} from 'react-icons/fa'
import styled from 'styled-components'
import uuid from 'uuid'
const SocialMedia = () => {
	const [ Icons ] = useState([
		<FaFacebookSquare />,
		<FaInstagram />,
		<FaTwitter />,
		<FaLinkedin />,
		<FaYoutubeSquare />
	])
	const [ Id ] = useState([ 'Facebook', 'Instagram', 'Twitter', 'Linkedin', 'YouTube' ])
	const [ Links ] = useState([
		'https://www.facebook.com/HexZer0',
		'https://www.instagram.com/hexzer0/',
		'https://twitter.com/Hex_Zero_',
		'https://www.linkedin.com/in/mantas-brasiunas/',
		'https://www.youtube.com/channel/UCp6TdUkQsXaBOMYaBc9DrNQ'
	])

	return (
		<React.Fragment>
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
					<stop stopColor='#fdf497' offset='0' />
					<stop stopColor='#fdf497' offset='0.05' />
					<stop stopColor='#fd5949' offset='0.45' />
					<stop stopColor='#d6249f' offset='0.6' />
					<stop stopColor='#285AEB' offset='0.9' />
				</radialGradient>
			</svg>
			<svg width='0' height='0'>
				<radialGradient id='rgi' r='150%' cx='30%' cy='107%'>
					<stop stopColor='#e1d989' offset='0' />
					<stop stopColor='#e1d989' offset='0.05' />
					<stop stopColor='#ce483b' offset='0.45' />
					<stop stopColor='#c42192' offset='0.6' />
					<stop stopColor='#214dce' offset='0.9' />
				</radialGradient>
			</svg>
		</React.Fragment>
	)
}
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
		color: #ff1500;
		&:hover {
			color: #bd1303;
		}
	}
`
export default SocialMedia
