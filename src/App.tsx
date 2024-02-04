import { useState } from "react"
import { Routes, Route } from "react-router-dom"

import Home from "./components/Home"
import UserHome from "./components/UserHome"
function App() {
	const [loggedIn, setLoggedIn] = useState(true)
	return (
		<>
			<Routes>
				{loggedIn ? (
					<Route path="/" element={<UserHome />}></Route>
				) : (
					<Route path="/" element={<Home />}></Route>
				)}
			</Routes>
		</>
	)
}

export default App
