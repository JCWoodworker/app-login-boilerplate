import { Routes, Route } from "react-router-dom"
import { Nav } from "react-bootstrap"

import Home from "./pages/Home/Home"
import Login from "./pages/auth/Login"
import SignUp from "./pages/auth/Signup"
import Logout from "./pages/auth/Logout"
import NotFoundPage from "./pages/NotFound/NotFoundPage"

import UserHome from "./pages/UserPages/UserHome"

import useAuth from "./Hooks/useAuth"

function App() {
	const { persist } = useAuth()

	return (
		<>
			{!persist ? (
				<>
					<Nav>
						<Nav.Item>
							<Nav.Link href="/">Home</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link href="/login">Login</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link href="/signup">Signup</Nav.Link>
						</Nav.Item>
					</Nav>

					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/login" element={<Login />} />
						<Route path="/signup" element={<SignUp />} />
						<Route path="*" element={<NotFoundPage />} />
					</Routes>
				</>
			) : (
				<>
					<Nav>
						<Nav.Item>
							<Nav.Link href="/">Home</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link href="/logout">Logout</Nav.Link>
						</Nav.Item>
					</Nav>

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
