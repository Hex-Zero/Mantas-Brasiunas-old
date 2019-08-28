import React from 'react'
import Background from './components/Background'
import Projects from './components/Projects'
import Burger from './components/Burger'
import { ModalProvider } from './context/ModalContext'
import Logos from './assets/logos/Logos'

function App() {
	return (
		<ModalProvider>
			<Background />
			<Projects />
			<Burger />
			<Logos />
		</ModalProvider>
	)
}
export default App
