import React, { useState } from 'react'
import Loading from '../Loading'
import { FaGithub, FaGlobe } from 'react-icons/fa'
import ravenouse from '../assets/ravenouse.jpg'
import first from '../assets/first.jpg'
import vita from '../assets/vita.jpg'
import budget from '../assets/budget.jpg'
const Image = React.lazy(() => import('./Image'))
const VideoCards = ({ url, title, content, git, web }) => {
	const [ imageUrl ] = useState([ vita, ravenouse, budget, first ])
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
				<React.Suspense fallback={''}>
					<Image src={imageUrl[url]} />
				</React.Suspense>
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
