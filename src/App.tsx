import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home/Home"
import Login from "./pages/UserManagement/Login"
import SignUp from "./pages/UserManagement/Signup"
import Logout from "./pages/UserManagement/Logout"
import NotFoundPage from "./pages/NotFound/NotFoundPage"

import UserHome from "./pages/UserPages/UserHome"

function App() {
	const loggedIn = true
	return (
		<>
			<Routes>
				{!loggedIn ? (
					<Route path="/" element={<Home />}>
						<Route path="/signin" element={<Login />} />
						<Route path="/signup" element={<SignUp />} />
					</Route>
				) : (
					<Route path="/" element={<UserHome />}>
						<Route path="/signout" element={<Logout />} />
						<Route path="/my-inventory">
							{/* <Route index element={<LocationIndex />} />
							<Route path="locations/:id" element={<LocationShow />} />
							<Route path="locations/new" element={<NewLocation />} />
							<Route path="rooms">
								<Route path=":id" element={<RoomShow />} />
								<Route path="new" element={<NewRoom />} />
							</Route>
							<Route path="items">
								<Route path=":id" element={<ItemShow />} />
								<Route path="new" element={<NewItem />} /> 
							</Route> */}
						</Route>
					</Route>
				)}
				<Route path="/*" element={<NotFoundPage />} />
			</Routes>
		</>
	)
}

export default App
