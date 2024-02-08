// import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.scss"
import { BrowserRouter } from "react-router-dom"
import { AuthProvider } from "./context/AuthProvider.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
	// <React.StrictMode>
		<BrowserRouter>
			<AuthProvider>
				<App />
			</AuthProvider>
		</BrowserRouter>
	// </React.StrictMode>
)
