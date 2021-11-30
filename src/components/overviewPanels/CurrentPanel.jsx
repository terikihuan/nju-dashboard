import React, {useContext} from 'react'
import './overviewPanels.css'
import {UserContext} from '../../contexts/UserContext'

// Components
import CourseCard from '../courseCard/CourseCard'
import AddCourseCard from '../courseCard/AddCourseCard'
import OverviewTotalCred from '../overviewTotalCred/OverviewTotalCred'

const CurrentPanel = () => {
  const {userCourses} = useContext(UserContext)
  return (
    <div className="topPanel currentPanel">
      <div className="PanelWrapper">
        <div className="PanelLabel">
          <h3>Current Courses</h3>
          <OverviewTotalCred courses={userCourses} />
        </div>
        <div className="topPanelContent panelContent">
          {userCourses.map((course, index) => <CourseCard course={course} key={index} />)}
          <AddCourseCard />
        </div>
      </div>
    </div>
  )
}

export default CurrentPanel
