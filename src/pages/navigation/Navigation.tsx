import { Nav } from "react-bootstrap"
import useAuth from "../../Hooks/useAuth"
import { loggedInLinks, loggedOutLinks } from "../../pages/navigation/navLinks"

const Navigation = () => {
	const { persist } = useAuth()
  
	let links
	if (persist) {
		links = loggedInLinks.map((link) => {
			return (
				<Nav>
					<Nav.Item>
						<Nav.Link href={link.path}>{`${link.name} ${link.icon}`}</Nav.Link>
					</Nav.Item>
				</Nav>
			)
		})
	} else {
		links = loggedOutLinks.map((link) => {
			return (
				<Nav>
					<Nav.Item>
						<Nav.Link href={link.path}>{`${link.name} ${link.icon}`}</Nav.Link>
					</Nav.Item>
				</Nav>
			)
		})
	}

	return <div>{links}</div>
}

export default Navigation
