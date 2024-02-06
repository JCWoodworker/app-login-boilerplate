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
		// This block is for testing purposes
		if (persist) {
			const user = localStorage.getItem("user")
			const accessToken = localStorage.getItem("accessToken")
			setAuth({ user: user || "", accessToken: accessToken || "" })
		}
		// End test block
		localStorage.setItem("persistUser", JSON.stringify(persist))
		console.log(`persist? ${persist}`)
	}, [persist])

	useEffect(() => {
		console.log(`auth: ${JSON.stringify(auth)}`)
	}, [auth])

	return (
		<AuthContext.Provider value={{ auth, setAuth, persist, setPersist }}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthContext
