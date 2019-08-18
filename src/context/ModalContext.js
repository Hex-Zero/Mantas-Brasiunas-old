import React, { useState, createContext, lazy, Suspense } from 'react'
import ravenouse from '../assets/ravenouse.jpg'
import first from '../assets/first.gif'
import vita from '../assets/vita.gif'
import budget from '../assets/budget.jpg'
export const ModalContext = createContext()

export const ModalProvider = (props) => {
	const [ visible, setVisible ] = useState('')
	const [ imageUrl ] = useState([ vita, ravenouse, budget, first ])
	return (
		<ModalContext.Provider value={{ visible, setVisible, imageUrl }}>
			{props.children}
		</ModalContext.Provider>
	)
}
