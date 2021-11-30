import React from 'react'
import './overviewTotalCred.css'

const OverviewTotalCred = ({courses, style}) => {
  return (
    <div className="overviewTotalCredits" style={style}>
      Total credits: {courses.reduce((total, course) => total + course.credit, 0)}
    </div>
  )
}

export default OverviewTotalCred
