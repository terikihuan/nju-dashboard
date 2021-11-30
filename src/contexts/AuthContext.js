import React, { useState, useEffect } from "react"
import axios from "axios"

const rootUrl = "http://localhost:5000"
export const AuthContext = React.createContext()

const AuthContextProvider = ({ children }) => {
  // State variables
  const [name, setName] = useState("")
  const [studentIdNum, setStudentIdNum] = useState("")
  const [password, setPassword] = useState("")
  const [isLoggedin, setIsLoggedin] = useState(false)

  // DEV variables
  const [tempUser, setTempUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  )

  // Effects
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(tempUser))
  }, [tempUser])

  // Functions
  // !! Not implemented yet
  const handleRegister = async (e) => {
    e.preventDefault()
    if (!name || !studentIdNum || !password) return
    console.log("register called")
    try {
      const url = `${rootUrl}/api/v1/auth/register`
      const response = await axios.post(url, {
        name,
        studentIdNum,
        password,
      })
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  const login = async (e) => {
    e.preventDefault()
    if (!studentIdNum || !password) return
    try {
      const url = `${rootUrl}/api/v1/auth/login`
      const response = await axios.post(url, {
        studentIdNum,
        password,
      })
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  // Context value
  const contextValue = {
    name,
    studentIdNum,
    password,
    isLoggedin,
    setName,
    setStudentIdNum,
    setPassword,
    setIsLoggedin,
    handleRegister,
    login,
    tempUser,
    setTempUser,
  }

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  )
}

export default AuthContextProvider
