import React, { useState } from "react"

export const ThemeContext = React.createContext()

const ThemeContextProvider = ({ children }) => {
  // Default values
  const defaultFavNav = [
    "Transcript",
    "My Courses",
    "All Courses",
    "Major courses",
    "Course Withdrawal",
    "Student Info",
  ]

  // State variables
  const [language, setLanguage] = useState("ENG")
  const [isDarkmode, setIsDarkmode] = useState(false)
  const [favoriteNavs, setFavoriteNavs] = useState(defaultFavNav)

  // Context values
  const contextValue = {
    language,
    isDarkmode,
    setLanguage,
    setIsDarkmode,
    favoriteNavs,
    setFavoriteNavs,
  }

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
