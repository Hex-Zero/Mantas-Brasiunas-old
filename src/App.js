import React from 'react'
import Background from './components/Background'
import Projects from './components/Projects'
import Cover from './components/Cover'
import { ModalProvider } from './context/ModalContext'
import Burger from './components/Burger'

function App() {
	return (
		<ModalProvider>
			<Background />
			<Cover />
			<Projects />
			<Burger />
		</ModalProvider>
	)
}
export default App
