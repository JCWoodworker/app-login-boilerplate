import { useNavigate } from "react-router"
import { Button } from "react-bootstrap"
import useAuth from "../../Hooks/useAuth"

const Logout = () => {
  const navigate = useNavigate()
  const { setAuth, setPersist } = useAuth()
  const onClick = () => {
    localStorage.removeItem("user")
    localStorage.removeItem("accessToken")
    setAuth({ user: "", accessToken: "" })
    setPersist(false)
    navigate("/")
	}


  return (
    <div>
      <h1>Logout</h1>
      <Button
				variant="primary"
				onClick={() => onClick()}
			>
				Logout
			</Button>
    </div>
  )
}

export default Logout