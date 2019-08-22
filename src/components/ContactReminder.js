import React, { useState, useEffect } from 'react'

const ContactReminder = () => {
	const [ state, setstate ] = useState('')
	useEffect(() => {
		setTimeout(() => {
			setstate('show-pointer')
		}, 4500)
	}, [])
	return (
		<React.Fragment>
			<div className={`reminder-box ${state}`}>
				Contact Info
				<div className='pointer-box' />
			</div>
		</React.Fragment>
	)
}

export default ContactReminder
