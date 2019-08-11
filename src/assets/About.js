import React from 'react'
import styled from 'styled-components'
const About = () => {
	return (
		<div className='About'>
			<Title>My View</Title>
			<Content>
				We live in a vast, complex and enticing world. I am highly fascinated by it. For all
				its variety and colors are amazing to behold. As it changes and advances around us
				every day faster than the last, I feel enthusiastic about adapting and learning.
				Because whenever I get to advance my knowledge, it opens up my eyes and allows me to
				see the world in more detail. Thus, as my knowledge grows the world becomes fuller
				and more complete.
			</Content>
			<Title>Motivation</Title>
			<Content>
				Everyone is driven by different motivations in life. One of my main motivations is
				the pride in the work that I do. The feeling that you get when your work is admired
				by everyone is amazing. Altho an even greater motivation in my eyes is competition.
				My performance increases exponentially if I have a difficult task or a strong
				competitor. And in seems like there is always some goal to reach or champion to
				catch up to.
			</Content>
			<Title>Team Work</Title>
			<Content>x</Content>
			<Title>Work Flow</Title>
			<Content>x</Content>
		</div>
	)
}
const Title = styled.p`
	font-size: 18px;
	font-weight: 500;
`
const Content = styled.p`text-align: left;`

export default About
