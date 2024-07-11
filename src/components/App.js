import React from 'react'
import './../styles/App.css'

const App = () => {
	const [counter, setCounter] = React.useState(0)

	const incrementCounter = () => {
		setCounter((prev)=>prev+1)
	}

	return (
		<div>
			{/* Do not remove the main div */}
			<p>Button clicked {counter} times</p>
			<button onClick={incrementCounter}>Click me</button>
		</div>
	)
}

export default App
