import React from 'react'
import StudentRow from 'components/StudentRow'

const SearchResults = () => {
  return (
    <>
      <ul id="studentTable" className="records">
        <StudentRow />
        <StudentRow />
        <StudentRow />
      </ul>

      <p id="numStudents"></p>
    </>
  )
}

export default SearchResults