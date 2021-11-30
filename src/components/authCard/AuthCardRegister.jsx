import React, {useContext, useRef} from 'react'
import './authCard.css'
import {Link} from 'react-router-dom'
import {AuthContext} from '../../contexts/AuthContext'

const AuthCardRegister = () => {
  // State variables
  const {setTempUser} = useContext(AuthContext)
  const tempUserRef = useRef()

  // Functions
  const handleSubmit = (e) => {
    e.preventDefault()
    setTempUser(tempUserRef.current.value)
    window.location.replace('/')
  }

  return (
    <div className="authCardRegister">
      <form action="" className="authCardForm" onSubmit={handleSubmit}>
        <h1 className="authCardFormTitle" >Register</h1>
        <input type="text" placeholder="Name" ref={tempUserRef}/>
        <input type="text" placeholder="Student ID"/>
        <input type="password" placeholder="Password" />
        <button className="authFormButton" type="submit">Register</button>
        <p className="authCardAltButton">
          <Link to="/login" className="link">To Login</Link>
        </p>
      </form>
    </div>
  )
}

export default AuthCardRegister
