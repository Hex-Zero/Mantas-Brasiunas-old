import React from 'react'
import Background from './components/Background'
import Projects from './components/Projects'
import Burger from './components/Burger'
import { ModalProvider } from './context/ModalContext'

function App() {
	return (
		<ModalProvider>
			<Background />
			<Projects />
			<Burger />
		</ModalProvider>
	)
}
export default App
