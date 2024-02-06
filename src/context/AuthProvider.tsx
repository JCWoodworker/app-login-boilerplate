import { createContext, useState, useEffect } from "react"

interface Props {
	children: JSX.Element
}

export interface AuthInterface {
	user: string
	accessToken: string
}

export interface AuthContext {
	auth: AuthInterface
	setAuth: React.Dispatch<React.SetStateAction<AuthInterface>>
	persist: boolean
	setPersist: React.Dispatch<React.SetStateAction<boolean>>
}

const AuthContext = createContext<AuthContext>({
	auth: { user: "", accessToken: "" },
	setAuth: () => {},
	persist: false,
	setPersist: () => {},
})

export const AuthProvider: React.FC<Props> = ({ children }) => {
	const persistedData = localStorage.getItem("persistUser")
	const initialPersistState = persistedData ? JSON.parse(persistedData) : false
	const [auth, setAuth] = useState<AuthInterface>({
		user: "",
		accessToken: "",
	})
	const [persist, setPersist] = useState(initialPersistState)

	useEffect(() => {
		localStorage.setItem("persistUser", JSON.stringify(persist))
		console.log(`persist? ${persist}`)
	}, [persist])

	useEffect(() => {
		console.log(`auth: ${JSON.stringify(auth)}`)
	}, [auth])

	useEffect(() => {
		const user = localStorage.getItem("user")
		const accessToken = localStorage.getItem("accessToken")
		console.log(`Getting user and access token from local storage: {"${user}", "${accessToken}"}`)
		if (user && accessToken) {
			setAuth({ user: user, accessToken: accessToken })
		} else {
			localStorage.removeItem("user")
			localStorage.removeItem("accessToken")
		}
	}, [])

	return (
		<AuthContext.Provider value={{ auth, setAuth, persist, setPersist }}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthContext
