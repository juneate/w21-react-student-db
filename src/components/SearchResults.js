import React from 'react'

const SearchResults = () => {
  return (
    <>
      <ul id="studentTable" className="records">
        <li class="student">
          <img src="img/student.png" alt="Alan" class="photo" />
          <b>Turing, Alan</b>
          <data value="2.3">2.3 GPA</data>
        </li>
      </ul>

      <p id="numStudents"></p>
    </>
  )
}

export default SearchResults