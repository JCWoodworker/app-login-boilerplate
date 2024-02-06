export interface NavLink {
	name: string
	path: string
	icon: string
}

export const loggedOutLinks = [
	{
		name: "Home",
		path: "/",
		icon: "🏠",
	},
	{
		name: "Sign In",
		path: "/login",
		icon: "👤",
	},
	{
		name: "Sign Up",
		path: "/signup",
		icon: "👤",
	},
]

export const loggedInLinks = [
	{
		name: "Home",
		path: "/",
		icon: "🏠",
	},
	{
		name: "Sign Out",
		path: "/logout",
		icon: "👤",
	},
]
