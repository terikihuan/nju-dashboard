import React from "react"
import './homepage.css'

// Components
import CurrentPanel from '../../components/overviewPanels/CurrentPanel'
import FinishedPanel from '../../components/overviewPanels/FinishedPanel'
import RequiredPanel from '../../components/overviewPanels/RequiredPanel'

const HomePage = () => {
  // State variables

  return (
    <div className="appWrapper">
      <div className="homepage">
        <div className="overview">
          <div className="overviewTop">
            <CurrentPanel />
          </div>
          <div className="overviewBottom">
            <FinishedPanel />
            <RequiredPanel />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
