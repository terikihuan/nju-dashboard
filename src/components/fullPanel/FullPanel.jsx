import React from 'react'

import './fullPanel.css'


const FullPanel = ({title, children, button}) => {
  return (
    <div className="fullPanel">
      <div className="fullPanelWrapper">
        <div className="fullPanelLabel">
          <h3>{title}</h3>
          {!!button && (
            <span className="fullPanelBtnWrapper">
              {button()}
            </span>
          )}
        </div>
        <div className={"fullPanelContent"}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default FullPanel
