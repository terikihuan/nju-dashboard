import React, {useMemo, useContext} from 'react'
import './myCourses.css'
import {UserContext} from '../../../contexts/UserContext'

// Components
import FullPanel from '../../../components/fullPanel/FullPanel'
import AllCoursesTable from '../../../components/fullTable/CurrentCoursesTable'
import ToWithdrawCourseBtn from '../../../components/fullPanelButtons/ToWithdrawCourseBtn'

const MyCoursesPage = () => {
  // State Variables
  const {userCourses} = useContext(UserContext)

  // React Table variables
  const data = useMemo(() => [...userCourses], [userCourses])
  const columns = useMemo(() => [
    {
      Header: "Course code",
      accessor: "code",
      className: "tableHeader codeCol",
    },
    {
      Header: "Course name",
      accessor: "name",
    },
    {
      Header: "Teacher",
      accessor: "taughtBy",
      className: "tableHeader teacherCol",
    },
    {
      Header: "Department",
      accessor: "department_eng",
    },
    {
      Header: "Category",
      accessor: "category",
    },
    {
      Header: "Credit",
      accessor: "credit",
      
    },
  ], [])

  // Render
  return (
    <div className="appWrapper">
      <div className="myCoursesPage">
        <FullPanel title="My Courses" button={ToWithdrawCourseBtn}>
          <AllCoursesTable columns={columns} data={data} />
        </FullPanel>
      </div>
    </div>
  )
}

export default MyCoursesPage
