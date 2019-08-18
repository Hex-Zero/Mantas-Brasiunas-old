import React from 'react'
import VideoCards from './VideoCards'
import vita from '../assets/vita.gif'
import ravenouse from '../assets/ravenouse.jpg'
import budget from '../assets/budget.jpg'
import first from '../assets/first.gif'
import About from '../assets/About'

const Projects = () => {
	return (
		<div className='projects'>
			<h1 className='projectTitle'>Projects</h1>
			<div className='fbox'>
				<VideoCards
					url={vita}
					title={'Vita Smile Photograpy'}
					content={'Landing page for a local family run photograpy bussiness'}
					git='https://github.com/Hex-Zero/VitaSmilePhotography'
					web='https://vita-smile-photography.uk/'
				/>
				<VideoCards
					url={ravenouse}
					title={'Ravenouse'}
					content={'Practise reciving JSON data from Yelp API'}
					git='https://github.com/Hex-Zero/React-Codecademy'
					web='https://hex-zero.github.io/React-Codecademy/'
				/>
				<VideoCards
					url={budget}
					title={'Budget Calculator'}
					content={'Exploration of React-Hooks in a budget calculator application'}
					git='https://github.com/Hex-Zero/React-Hook-App'
					web='https://hex-zero.github.io/React-Hook-App/'
				/>
				<VideoCards
					url={first}
					title={'My First Website'}
					content={'My first steps in JavaScript, Made a classic memory game'}
					git='https://github.com/Hex-Zero/xFirst'
					web='https://hex-zero.github.io/xFirst/main.html'
				/>
				<About />
			</div>
		</div>
	)
}
export default Projects
