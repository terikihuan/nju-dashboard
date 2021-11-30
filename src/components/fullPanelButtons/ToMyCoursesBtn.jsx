import React from 'react'
import {Link} from 'react-router-dom'
import './fullPanelBtn.css'

const ToMyCoursesBtn = () => {
  return (
    <Link to='/course/myCourses' className='link' >
      <button className="fullPanelBtn">My Courses</button>
    </Link>
  )
}

export default ToMyCoursesBtn
