import React, { useState } from 'react'
import { FaPhone, FaCopy, FaMailBulk } from 'react-icons/fa'

import SocialMedia from './SocialMedia'

const Contact = () => {
	const [ alertMessage, setAlertMessage ] = useState('')
	const [ alertClass, setAlertClass ] = useState('')
	const handleCopy = (x) => {
		var copyText = document.getElementById(x)
		copyText.select()
		document.execCommand('copy')
		setAlertMessage(`${x} Copyed`)
		setAlertClass('')
		setTimeout(() => {
			setAlertClass('showAlert')
		}, 1)
	}
	return (
		<React.Fragment>
			<div className={`${alertClass} copyAlert`}>{alertMessage}</div>
			<h3 className='contactTitle'>Contact</h3>
			<div className='contactNode' onClick={() => handleCopy('Name')}>
				Name:{' '}
				<input className='input' type='text' value='Mantas Brasiunas' id='Name' readOnly />
				<span className='icons'>
					<span className='copy'>
						<FaCopy onClick={() => handleCopy('Name')} />
					</span>
				</span>
			</div>
			<div className='contactNode' onClick={() => handleCopy('Email')}>
				Email:{' '}
				<input className='input' type='text' value='Hex0@live.com' id='Email' readOnly />
				<span className='icons'>
					<a className='contactLink' href='mailto:Hex0@live.com'>
						<FaMailBulk />
					</a>
					<span className='copy'>
						<FaCopy onClick={() => handleCopy('Email')} />
					</span>
				</span>
			</div>
			<div className='contactNode' onClick={() => handleCopy('Phone')}>
				Phone:{' '}
				<input className='input' type='text' value='07933640414' id='Phone' readOnly />
				<span className='icons'>
					<a className='contactLink' href='tel:+447933640414'>
						<FaPhone />
					</a>
					<span className='copy'>
						<FaCopy onClick={() => handleCopy('Phone')} />
					</span>
				</span>
			</div>
			<h3 className='contactTitle'>Social Media</h3>
			<SocialMedia />
		</React.Fragment>
	)
}
export default Contact
