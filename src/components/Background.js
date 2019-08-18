import React, { useState, useEffect } from 'react'
import uuid from 'uuid'
import reach from '../assets/reach.png'

const Background = () => {
	const [ random, setRandom ] = useState()
	const [ random1, setRandom1 ] = useState()
	const [ random2, setRandom2 ] = useState()
	const [ random3, setRandom3 ] = useState()
	const [ random4, setRandom4 ] = useState()
	const [ random5, setRandom5 ] = useState()
	const [ random6, setRandom6 ] = useState()
	const [ random7, setRandom7 ] = useState()
	const randomArray = [ random, random1, random2, random3, random4, random5, random6, random7 ]
	const [ start ] = useState([ 7, 3, 10, 2 ])
	const [ drops ] = useState([ 'fallFast', 'fallMed', 'fallSlow', 'fallFastest' ])
	const makeid = () => {
		var characters = 'ABCDEF0123456789'
		var charactersLength = characters.length
		return characters.charAt(Math.floor(Math.random() * charactersLength))
	}
	useEffect(() => {
		setInterval(() => setRandom(makeid()), 500)
		setInterval(() => setRandom1(makeid()), 400)
		setInterval(() => setRandom2(makeid()), 460)
		setInterval(() => setRandom3(makeid()), 600)
		setInterval(() => setRandom4(makeid()), 540)
		setInterval(() => setRandom5(makeid()), 600)
		setInterval(() => setRandom6(makeid()), 500)
		setInterval(() => setRandom7(makeid()), 400)
	}, [])

	return (
		<React.Fragment>
			<div className='background'>
				{drops.map((drop, index) => (
					<div
						key={drop}
						className={drop + ' fallingNumbers'}
						style={{ marginLeft: `${start[index]}vw` }}>
						{randomArray.map((random) => {
							return (
								<div key={uuid()} className='box'>
									<h1 className='text'>{random}</h1>
									<br />
								</div>
							)
						})}
					</div>
				))}
				<img src={reach} alt='' />
			</div>
			<div className='coverBackground' />
		</React.Fragment>
	)
}

export default Background
