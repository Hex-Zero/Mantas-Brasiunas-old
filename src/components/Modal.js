import React, { useState, useEffect, useContext } from 'react'
import { ModalContext } from '../context/ModalContext'
import { FaTimes } from 'react-icons/fa'
import Contact from './Contact'
const Modal = () => {
	const { visible, setVisible } = useContext(ModalContext)
	const [ coverAnim, setCoverAnim ] = useState('')
	const [ modalShow, setModalShow ] = useState('')
	useEffect(
		() => {
			if (visible === 'show') {
				setModalShow('modalIn')
				setCoverAnim('modalCoverUp')
			} else if (visible === 'notShow') {
				setModalShow('modalOut')
				setCoverAnim('modalCoverDown')
			}
		},
		[ visible ]
	)
	return (
		<div className='modal'>
			<div className={`modalCover ${coverAnim}`} onClick={() => setVisible('notShow')} />
			<div className={`modalInside ${modalShow}`}>
				<FaTimes className='close' onClick={() => setVisible('notShow')} />
				<Contact />
			</div>
		</div>
	)
}
export default Modal
