import React, { useState, createContext } from 'react'

export const ModalContext = createContext()

export const ModalProvider = (props) => {
	const [ visible, setVisible ] = useState(false)
	return (
		<ModalContext.Provider value={[ visible, setVisible ]}>
			{props.children}
		</ModalContext.Provider>
	)
}
