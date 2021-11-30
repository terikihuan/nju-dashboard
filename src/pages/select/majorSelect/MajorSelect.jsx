import React, { useState, useMemo, useContext, useEffect, useRef} from 'react'
import AllCourses from '../../../data/courseData/AllCourse.json'
import './majorSelect.css'
import {UserContext} from '../../../contexts/UserContext'

// Components
import FullPanel from '../../../components/fullPanel/FullPanel'
import SelectCourseTable from '../../../components/fullTable/SelectCourseTable'
import ColumnFilter from '../../../components/tableFilter/ColumnFilter'
import SelectColumnFilter from '../../../components/tableFilter/SelectColumnFilter'
import ToMyCoursesBtn from '../../../components/fullPanelButtons/ToMyCoursesBtn'
import Modal from '../../../components/modal/Modal'

const MajorCoursesSelectPage = () => {
  // State Variables
  const [showModal, setShowModal] = useState(false)
  const [courseInfo, setCourseInfo] = useState({})
  const [allowEnroll, setAllowEnroll] = useState(false)
  const {userCourses, setUserCourses} = useContext(UserContext)
  const latestCourses = useRef([])

  // Functions
  const handleClick = async (course) => {
    setCourseInfo(course)
    setShowModal(true)
    const isDuplicate = latestCourses.current.filter(currCourse => currCourse.code === course.code).length
    if (isDuplicate) {
      setAllowEnroll(false)
    } else {
      setAllowEnroll(true)
    }
  }
  const handleEnroll = (course) => {
    setUserCourses(prevCourses => [...prevCourses, course])
    setShowModal(false)
  }

  // Effects
  useEffect(() => {
    latestCourses.current = userCourses
  }, [showModal, userCourses])

  useEffect(() => {
    setUserCourses(userCourses)
  }, [showModal, handleClick])

  // React Table variables
  const data = useMemo(() => [...AllCourses], [AllCourses])
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
      Filter: SelectColumnFilter,
    },
    {
      Header: "Level",
      accessor: "level",
      Filter: SelectColumnFilter,
    },
    {
      Header: "Category",
      accessor: "category",
      Filter: SelectColumnFilter,
    },
    {
      Header: "Credit",
      accessor: "credit",
      Filter: SelectColumnFilter,
    },
  ], [])
  const defaultColumn = useMemo(() => {
    return { Filter: ColumnFilter }
  }, [])
  const tableHooks = (hooks) => {
    hooks.visibleColumns.push((columns) => [
      ...columns,
      {
        id: "enroll",
        Header: "Enroll", 
        Cell: ({row}) => (
          <button className="tableBtn" onClick={() => handleClick(row.original)} >
            Enroll
          </button>
        )
      }
    ])
  }
  
  // Render
  const {name, code, taughtBy, department_eng, category, level, credit} = courseInfo
  return (
    <div className="appWrapper">
      <div className="majorCoursesSelectPage">
        <FullPanel title="Major Courses" button={ToMyCoursesBtn}>
          <SelectCourseTable columns={columns} data={data} defaultColumn={defaultColumn} tableHooks={tableHooks} />
        </FullPanel>
        {showModal && (
          <Modal setShowModal={setShowModal}>
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
              {allowEnroll 
                ? (
                  <>
                    <span>Please confirm course enrollment </span>
                    <button className="confirmButton" onClick={() => handleEnroll(courseInfo)}>Enroll</button>
                  </>
                ) : (
                  <p>You're currently taking this course</p>
                )
              }
            </div>
          </Modal>
        )}
      </div>
    </div>
  )
}

export default MajorCoursesSelectPage
