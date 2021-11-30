import React from 'react'
import './overviewPanels.css'
import RequiredCourse from '../../data/courseData/RequiredCourses.json'

// Components
import OverviewTable from '../overviewTable/OverviewTable'
import OverviewTotalCred from '../overviewTotalCred/OverviewTotalCred'

const RequiredPanel = () => {
  return (
    <div className="botPanel requiredPanel">
      <div className="PanelWrapper">
        <div className="PanelLabel">
          <h3>Required Courses</h3>
          <OverviewTotalCred courses={RequiredCourse} />
        </div>
        <div className="botPanelContent panelContent">
          <OverviewTable 
            headers={["Course Name", "Credit", "Completion"]} 
            data={RequiredCourse} 
            fields={["name", "credit", "completion"]}
            id="requiredPanelTable"
          />
        </div>
      </div>
    </div>
  )
}

export default RequiredPanel
