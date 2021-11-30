import React from 'react'
import {Link} from 'react-router-dom'
import './courseCard.css'

import * as FaIcons from "react-icons/fa";

const AddCourseCard = () => {
  return (
    <Link to='/select/majorSelect' className='link'>
      <div className="courseCard addCourseCard" >
        <FaIcons.FaRegPlusSquare />
      </div>
    </Link>
  )
}

export default AddCourseCard
