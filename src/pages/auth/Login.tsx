import { useNavigate } from "react-router"
import { Button } from "react-bootstrap"
import useAuth from "../../Hooks/useAuth"

const Login = () => {
	const navigate = useNavigate()
	const { setAuth, setPersist } = useAuth()
	const onClick = () => {
		localStorage.setItem("user", "testUser")
		localStorage.setItem("accessToken", "testAccessToken")
		setAuth({ user: "testUser", accessToken: "testAccessToken" })
		setPersist(true)
		navigate("/")
	}

	return (
		<div>
			<h1>Login</h1>
			<Button variant="primary" onClick={() => onClick()}>
				Login
			</Button>
		</div>
	)
}

export default Login
