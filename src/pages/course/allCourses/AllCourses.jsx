import React, {useMemo} from 'react'
import AllCourses from '../../../data/courseData/AllCourse.json'
import './allCourses.css'

// Components
import FullPanel from '../../../components/fullPanel/FullPanel'
import AllCoursesTable from '../../../components/fullTable/AllCoursesTable'
import ColumnFilter from '../../../components/tableFilter/ColumnFilter'
import SelectColumnFilter from '../../../components/tableFilter/SelectColumnFilter'
import ToSelectCourseBtn from '../../../components/fullPanelButtons/ToSelectCourseBtn'


const AllCoursesPage = () => {

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
  

  // Render
  return (
    <div className="appWrapper">
      <div className="allCoursesPage">
        <FullPanel title="All Courses" button={ToSelectCourseBtn}>
          <AllCoursesTable columns={columns} data={data} defaultColumn={defaultColumn} />
        </FullPanel>
      </div>
    </div>
  )
}

export default AllCoursesPage
