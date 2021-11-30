import React, {useContext} from 'react'
import './studentInfo.css'
import { UserContext } from '../../../contexts/UserContext'

// Components
import FullPanel from '../../../components/fullPanel/FullPanel'

const StudentInfoPage = () => {
  // State variables
  const {userObject} = useContext(UserContext)

  // Render
  const {name, image, department, schoolYear, major} = userObject
  return (
    <div className="appWrapper">
      <div className="studentInfoPage">
        <FullPanel title="Student Informations" className="studentInfoPanel">
          <div className="studentInfoContainer">
            <div className="studentImgWrapper">
              <img className="studentImg" src={image} alt="" />
            </div>
            <div className="studentInfoDetails">
              <p>Name: {name}</p>
              <p>Major: {major}</p>
              <p>Department: {department}</p>
              <p>School Year: {schoolYear}</p>
            </div>
          </div>
        </FullPanel>
      </div>
    </div>
  )
}

export default StudentInfoPage
