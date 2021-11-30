import React, { useState, useEffect, useContext } from "react"
import { AuthContext } from "./AuthContext"

// Data
import CurrentCourses from "../data/courseData/CurrentCourses.json"

export const UserContext = React.createContext()

const UserContextProvider = ({ children }) => {
  // Default values
  const { tempUser } = useContext(AuthContext)
  const defaultUser = {
    name: tempUser,
    major: "Business Chinese",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Macaca_nigra_self-portrait_large.jpg/1200px-Macaca_nigra_self-portrait_large.jpg",
    department: "International Institute",
    schoolYear: "2020 - 2024",
  }

  // State variables
  const [userObject, setUserObject] = useState(defaultUser)

  // DEV variables
  const [userCourses, setUserCourses] = useState(
    JSON.parse(localStorage.getItem("courses")) || CurrentCourses
  )

  // Effects
  useEffect(() => {
    localStorage.setItem("courses", JSON.stringify(userCourses))
  }, [userCourses])

  // Context value
  const contextValue = {
    userCourses,
    setUserCourses,
    userObject,
    setUserObject,
  }

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  )
}

export default UserContextProvider
