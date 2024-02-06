import { Routes, Route } from "react-router-dom"
import useAuth from "./Hooks/useAuth"

import Navigation from "./pages/navigation/Navigation"
import Home from "./pages/Home/Home"
import Login from "./pages/auth/Login"
import SignUp from "./pages/auth/Signup"
import Logout from "./pages/auth/Logout"
import NotFoundPage from "./pages/NotFound/NotFoundPage"

import UserHome from "./pages/UserPages/UserHome"

function App() {
	const { persist } = useAuth()

	return (
		<>
			{!persist ? (
				<>
					<Navigation />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/login" element={<Login />} />
						<Route path="/signup" element={<SignUp />} />
						<Route path="*" element={<NotFoundPage />} />
					</Routes>
				</>
			) : (
				<>
					<Navigation />
					<Routes>
						<Route path="/" element={<UserHome />} />
						<Route path="/logout" element={<Logout />} />
						<Route path="*" element={<NotFoundPage />} />
					</Routes>
				</>
			)}
		</>
	)
}

export default App
