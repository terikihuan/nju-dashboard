import React, {useMemo, useContext, useState} from 'react'
import './courseWithdrawal.css'
import {UserContext} from '../../../contexts/UserContext'

// Components
import FullPanel from '../../../components/fullPanel/FullPanel'
import WithdrawCoursesTable from '../../../components/fullTable/WithdrawCourseTable'
import ToAllCoursesBtn from '../../../components/fullPanelButtons/ToAllCoursesBtn'
import Modal from '../../../components/modal/Modal'

const CourseWithdrawalPage = () => {
  // State Variables
  const {userCourses, setUserCourses} = useContext(UserContext)
  const [courseInfo, setCourseInfo] = useState({})
  const [showModal, setShowModal] = useState(false)

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
  const tableHooks = (hooks) => {
    hooks.visibleColumns.push((columns) => [
      ...columns,
      {
        id: "withdraw",
        Header: "Withdraw", 
        Cell: ({row}) => (
          <button className="tableBtn" onClick={() => handleClick(row.original)} >
            Withdraw
          </button>
        )
      }
    ])
  }

  // Functions
  const handleClick = (course) => {
    console.log(course)
    setCourseInfo(course)
    setShowModal(true)
  }

  const handleWithdraw = (course) => {
    const newCourses = userCourses.filter(currCourse => currCourse.code !== course.code)
    setUserCourses(newCourses)
    setShowModal(false)
  }

  // Render
  const {name, code, taughtBy, department_eng, category, level, credit} = courseInfo
  return (
    <div className="appWrapper">
      <div className="courseWithdrawalPage" >
        <FullPanel title="Course Withdrawal" button={ToAllCoursesBtn} >
          <WithdrawCoursesTable columns={columns} data={data} tableHooks={tableHooks} />
        </FullPanel>
        {showModal && (
          <Modal setShowModal={setShowModal} >
            <div className="courseInfoTitle">
              <h3>Course Informations</h3>
            </div>
            <div className="courseInfoGroup">
              <div className="groupLeft">
                <p>Course name: {name}</p>
                <p>Course code: {code}</p>
                <p>Professor: {taughtBy}</p>
                <p>Department: {department_eng}</p>
              </div>
              <div className="groupRight">
                <p>Category: {category}</p>
                <p>Course level: {level}</p>
                <p>Credits: {credit}</p>
              </div>
            </div>
            <div className="confirmGroup">
              <span>Please confirm course withdrawal </span>
              <button className="confirmButton"onClick={() => handleWithdraw(courseInfo)} >Confirm</button>
            </div>

          </Modal>
        )}
      </div>
    </div>
  )
}

export default CourseWithdrawalPage
