import React from 'react'
import { ModalContext } from '../context/ModalContext'
import Modal from './Modal'
import Loading from '../Loading'
import face from '../assets/face.jpg'
const Burger = () => {
	const { setVisible } = React.useContext(ModalContext)
	return (
		<React.Fragment>
			<Modal />
			<div className='burger' onClick={() => setVisible('show')}>
				<div className='imageCircul'>
					<Loading />
					<img className='img' src={face} alt='my face' />

					<div className='statusCircul'>
						<div className='statusLight' />
					</div>
					<div className='burger'>
						<div className='burger-line' />
						<div className='burger-line' />
						<div className='burger-line' />
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}
export default Burger
