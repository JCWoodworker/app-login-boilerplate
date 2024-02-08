import useAuth from "../../Hooks/useAuth"

const UserHome = () => {
	const { auth } = useAuth()

	return (
		<div className="google-oauth mt-2 p-4 d-flex flex-column justify-content-center align-items-center gap-4">
			<h1>User Home</h1>
      <p>{`Welcome ${auth?.user}`}</p>
		</div>
	)
}

export default UserHome
