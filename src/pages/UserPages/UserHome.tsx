import useAuth from "../../Hooks/useAuth"

const UserHome = () => {
	const { auth } = useAuth()

	return (
		<div>
			<h1>User Home</h1>
      <p>{`Welcome ${auth?.user}`}</p>
		</div>
	)
}

export default UserHome
