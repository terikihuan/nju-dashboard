import React, {useContext, useRef} from 'react'
import './authCard.css'
import {Link} from 'react-router-dom'
import {AuthContext} from '../../contexts/AuthContext'

const AuthCardLogin = () => {
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
    <div className="authCardLogin">
      <form action="" className="authCardForm" onSubmit={handleSubmit}>
        <h1 className="authCardFormTitle" >Login</h1>
        {/* Remove below when implement back-end */}
        <input type="text" placeholder="Name" ref={tempUserRef}/>
        {/* Remove above when implement back-end */}
        <input type="text" placeholder="Student ID" />
        <input type="password" placeholder="Password"/>
        
        <button className="authFormButton">Login</button>
        <p className="authCardAltButton">
          <Link to="/register" className="link">To Register</Link>
        </p>
      </form>
    </div>
  )
}

export default AuthCardLogin
