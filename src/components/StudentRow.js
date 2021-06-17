import React from 'react'
import noImg from 'img/student.png'

const StudentRow = () => {
  return (
    <li className="student">
      <img src={noImg} alt="Alan" className="photo" />
      <b>Turing, Alan</b>
      <data value="2.3">2.3 GPA</data>
    </li>
  )
}

export default StudentRow