import React, {useContext} from 'react'
import './overviewTable.css'
import {UserContext} from '../../contexts/UserContext'
import FinishedCourses from '../../data/courseData/FinishedCourses.json'


const OverviewTable = ({headers, data, fields, id}) => {
  // State Variables
  const {userCourses} = useContext(UserContext)

  return (
    <table className="overviewTable" id={id}>
      <thead>
        <tr className="overviewTableHeader">
          {headers.map((header, index) => {
            return <th className="overviewTableCell" key={index}>
              {header}
            </th>
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => {
          return <tr className="overviewTableDataRow" key={index}>
            {fields.map((field, index) => {
              if (field === "completion") {
                const hasTaken = FinishedCourses.filter(course => course.code === item.code).length
                const isTaking = userCourses.filter(course => course.code === item.code).length  
                if (hasTaken) {
                  return <td className="overviewTableCell" key={index}>Yes</td>
                } else if (isTaking) {
                  return <td className="overviewTableCell" key={index}>Enrolled</td>
                } else {
                  return <td className="overviewTableCell" key={index}>No</td>
                }
              } else {
                return <td className="overviewTableCell" key={index}>{item[field]}</td>
              }
            })}
          </tr>
        })}
      </tbody>
    </table>
  )
}

export default OverviewTable
