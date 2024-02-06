import { useNavigate } from "react-router"
import { Button } from "react-bootstrap"
import useAuth from "../../Hooks/useAuth"
import GoogleOAuth from "./GoogleOAuth"

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
			<h2>OR USE GOOGLE:</h2>
			<div className="google-login d-flex justify-content-center align-items-center">
				<GoogleOAuth/>
			</div>
		</div>
	)
}

export default Login
