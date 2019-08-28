import React, { useRef, useState, useEffect } from 'react'

const Jokes = () => {
	const isCurrent = useRef(true)
	const arrayCatergories = [ 'Programming', 'Miscellaneous', 'Dark' ]
	const [ category, setcategory ] = useState('Programming')
	const [ joketext, setjoketext ] = useState('')
	const [ next, setnext ] = useState(true)
	const url = `https://sv443.net/jokeapi/category/${category}`
	useEffect(() => {
		return () => {
			isCurrent.current = false
		}
	}, [])
	useEffect(
		() => {
			fetch(url).then((x) => x.text()).then((y) => {
				if (isCurrent.current) {
					const jokedata = JSON.parse(y)
					jokedata.type === 'single'
						? setjoketext(jokedata.joke)
						: setjoketext(`${jokedata.setup} \n${jokedata.delivery}`)
				}
			})
		},
		[ url, next, category ]
	)
	return (
		<React.Fragment>
			<div className='category-selector'>
				Category:{' '}
				<select onChange={(e) => setcategory(e.target.value)}>
					{arrayCatergories.map((c) => (
						<option key={c} value={c}>
							{c}
						</option>
					))}
				</select>
			</div>
			<div className='about-content'>{joketext}</div>
			<button className='btn next-joke' onClick={() => setnext(!next)}>
				Next
			</button>
		</React.Fragment>
	)
}

export default Jokes
