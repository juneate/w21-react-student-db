import React from 'react'
import StudentRow from 'components/StudentRow'

const SearchResults = ({result}) => {

  const theStudents = result.slice(0,3).map((student) => <StudentRow key={student.id} data={student} />)
  // Pagination is next

  // How many are in the original set (total that meet the criteria)?
  // How many to display per page?
  // What page are we currently showing?


  return (
    <div style={{backgroundColor: 'lightsteelblue', padding: `1em`}}>
      <ul id="studentTable" className="records" style={{backgroundColor: `salmon`, padding: `1em`}}>
        {theStudents}
      </ul>

      <p id="numStudents" style={{backgroundColor: `lightgreen`}}>
        {theStudents.length} {(theStudents.length === 1) ? `student` : `students`} of {result.length}
      </p>
    </div>
  )
}

export default SearchResults