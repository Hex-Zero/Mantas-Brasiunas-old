import React, { useState } from 'react'
import Loading from '../Loading'
import Slide from '../components/Slide'
const VideoCards = ({ url, title, content, git, web }) => {
	const [ state, setstate ] = useState('')
	const handleSlide = (value) => {
		setstate(value)
	}

	return (
		<div className='videoCards'>
			<div
				className='card'
				onMouseEnter={() => handleSlide('slidein')}
				onMouseLeave={() => handleSlide('slideout')}>
				<img className='projectImage' src={url} alt={title} />
				<Loading />
				<div className={state + ' slide'}>
					<Slide git={git} web={web} title={title} content={content} />
				</div>
			</div>
		</div>
	)
}

export default VideoCards
