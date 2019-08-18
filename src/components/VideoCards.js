import React, { useState } from 'react'
import Loading from '../Loading'
import { FaGithub, FaGlobe } from 'react-icons/fa'
import { ModalContext } from '../context/ModalContext'
const VideoCards = ({ url, title, content, git, web }) => {
	const { imageUrl } = React.useContext(ModalContext)
	const [ slide, setSlide ] = useState('')
	const handleSlide = (value) => {
		setSlide(value)
	}

	return (
		<div className='videoCards'>
			<div
				className='card'
				onMouseEnter={() => handleSlide('slidein')}
				onMouseLeave={() => handleSlide('slideout')}>
				<img className='projectImage' src={imageUrl[url]} alt={title} />
				<Loading />
				<div className={slide + ' slide'}>
					<div className='projectSlides'>
						<h1 className='title'>{title}</h1>
						<h2 className='content'>{content}</h2>
						<div className='bottom-Line'>
							<div className='tagWrapper'>
								<a
									className='web tags'
									href={web}
									target='__blank'
									alt='website link'>
									<FaGlobe />
								</a>
								<a
									className='git tags'
									href={git}
									target='__blank'
									alt='github link'>
									<FaGithub />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default VideoCards
