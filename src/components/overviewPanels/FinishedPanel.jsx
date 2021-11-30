import React from 'react'
import './overviewPanels.css'
import FinishedCourses from '../../data/courseData/FinishedCourses.json'

// Components
import OverviewTable from '../overviewTable/OverviewTable'
import OverviewTotalCred from '../overviewTotalCred/OverviewTotalCred'

const FinishedPanel = () => {
  return (
    <div className="botPanel finishedPanel">
      <div className="PanelWrapper">
        <div className="PanelLabel">
          <h3>Finished Courses</h3>
          <OverviewTotalCred courses={FinishedCourses} />
        </div>
        <div className="botPanelContent panelContent">
          <OverviewTable 
            headers={["Course Name", "Credit", "Score"]} 
            data={FinishedCourses} 
            fields={["name", "credit", "score"]}
            id="finishedPanelTable"
          />
        </div>
      </div>
    </div>
  )
}

export default FinishedPanel
