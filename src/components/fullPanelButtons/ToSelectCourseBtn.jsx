import React from 'react'
import {Link} from 'react-router-dom'
import './fullPanelBtn.css'

const ToSelectCourseBtn = () => {
  return (
    <Link to='/select/majorSelect' className='link' >
      <button className="fullPanelBtn">Select Courses</button>
    </Link>
  )
}

export default ToSelectCourseBtn
