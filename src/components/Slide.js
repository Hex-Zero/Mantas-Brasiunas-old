import React from 'react'
import { FaGithub, FaGlobe } from 'react-icons/fa'
const Slide = ({ git, web, content, title }) => {
	return (
		<div className='projectSlides'>
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
		</div>
	)
}

export default Slide
