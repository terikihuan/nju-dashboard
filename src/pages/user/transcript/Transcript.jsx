import React, {useMemo} from 'react'
import './transcript.css'
import FinishedCourses from '../../../data/courseData/FinishedCourses.json'

// Components
import FullPanel from '../../../components/fullPanel/FullPanel'
import TranscriptTable from '../../../components/fullTable/TranscriptTable'

const TranscriptPage = () => {
  // React Table variables
  const data = useMemo(() => [...FinishedCourses], [FinishedCourses])
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
      Header: "Level",
      accessor: "level", 
    },
    {
      Header: "Category",
      accessor: "category",
    },
    {
      Header: "Credit",
      accessor: "credit",
    },
    {
      Header: "Score",
      accessor: "score",
    },
  ], [])

  // Render
  return (
    <div className="appWrapper">
      <div className="transcriptPage">
        <FullPanel title="Transcript" >
          {/* Table goes here */}
          <TranscriptTable columns={columns} data={data} />
        </FullPanel>
      </div>
    </div>
  )
}

export default TranscriptPage
