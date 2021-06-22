import React from 'react'
import noImg from 'img/student.png'

const StudentRow = ({data}) => {
  const {id, name, gpa, enrolled, photo} = data

  return (
    <li className="student">
      <img src={noImg} alt={`${name.first} ${name.last}`} className="photo" />
      <b>{name.last}, {name.first} {(name.pref) ? `(${name.pref})` : ``}</b>
      <data value={gpa}>{gpa} GPA</data>
    </li>
  )
}

export default StudentRow