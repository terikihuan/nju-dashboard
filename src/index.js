import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import { BrowserRouter } from "react-router-dom"

// Contexts
import AuthContextProvider from "./contexts/AuthContext"
import ThemeContextProvider from "./contexts/ThemeContext"
import UserContextProvider from "./contexts/UserContext"

ReactDOM.render(
  <AuthContextProvider>
    <ThemeContextProvider>
      <UserContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </UserContextProvider>
    </ThemeContextProvider>
  </AuthContextProvider>,
  document.getElementById("root")
)
