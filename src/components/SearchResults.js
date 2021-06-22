import React from 'react'
import StudentRow from 'components/StudentRow'

const SearchResults = ({result}) => {

  const theStudents = result.map((student) => <StudentRow key={student.id} data={student} />)
  // Pagination is next

  return (
    <div style={{backgroundColor: 'lightsteelblue', padding: `1em`}}>
      <ul id="studentTable" className="records" style={{backgroundColor: `salmon`, padding: `1em`}}>
        {theStudents}
      </ul>

      <p id="numStudents" style={{backgroundColor: `lightgreen`}}>
        {theStudents.length} {(theStudents.length === 1) ? `student` : `students`}
      </p>
    </div>
  )
}

export default SearchResults