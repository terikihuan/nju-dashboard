import React from 'react'
import {Link} from 'react-router-dom'
import './fullPanelBtn.css'

const ToWithdrawCourseBtn = () => {
  return (
    <Link to='/select/withdrawal' className='link' >
      <button className="fullPanelBtn">Withdraw Courses</button>
    </Link>
  )
}

export default ToWithdrawCourseBtn
