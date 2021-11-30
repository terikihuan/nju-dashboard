import React from 'react'
import { Link } from 'react-router-dom'
import './fullPanelBtn.css'

const ToAllCoursesBtn = () => {
  return (
    <Link to='/course/allCourses' className='link' >
      <button className="fullPanelBtn">My Courses</button>
    </Link>
  )
}

export default ToAllCoursesBtn
